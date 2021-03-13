import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import mainApi from '../../utils/MainApi';

import moviesApi from '../../utils/MoviesApi';

import searchFilter from '../../utils/searchFilter';

import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import MobileAccountNavList from '../MobileAccountNavList/MobileAccountNavList';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer'
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoadingData, setIsLoadingData] = React.useState(true);
  const [isLoadingMoviesData, setIsLoadingMoviesData] = React.useState(false);
  const [isLoadingSignin, setIsLoadingSignin] = React.useState(false);
  const [isLoadingSignup, setIsLoadingSignup] = React.useState(false);
  const [isLoadingUpdateCurrentUser, setIsLoadingUpdateCurrentUser] = React.useState(false);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const [currentUserData, setCurrentUserData] = React.useState({});
  const [moviesData, setMoviesData] = React.useState([]);
  const [savedMoviesData, setSavedMoviesData] = React.useState([]);

  const [authResStatus, setAuthResStatus] = React.useState(null);
  const [tokenAuthResStatus, setTokenAuthResStatus] = React.useState(null);
  const [registrationResStatus, setRegistrationResStatus] = React.useState(null);
  const [updateCurrentUserResStatus, setUpdateCurrentUserResStatus] = React.useState(null);
  const [moviesApiResStatus, setMoviesApiResStatus] = React.useState(null);
  const [saveFavoriteMovieResStatus, setSaveFavoriteMovieResStatus] = React.useState(null);
  const [getSavedMoviesResStatus, setGetSavedMoviesResStatus] = React.useState(null);
  const [deleteSavedMovieResStatus, setDeleteSavedMovieResStatus] = React.useState(null);

  const history = useHistory();

  const saveCurrentUserDataToLocalStorage = (data) => {
    const { name, email, _id } = data;
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userId', _id);
  }

  const handleResetResStatus = () => {
    if (
      tokenAuthResStatus ||
      updateCurrentUserResStatus ||
      registrationResStatus ||
      authResStatus
    ) {
      setUpdateCurrentUserResStatus(null);
      setRegistrationResStatus(null);
      setTokenAuthResStatus(null);
      setAuthResStatus(null);
    };
  };

  const tokenCheck = React.useCallback(
    () => {

      const token = localStorage.getItem('jwt');

      if (token) {
        setIsLoadingData(true);
        mainApi.checkToken(token)
          .then(
            (res) => {
              setTokenAuthResStatus(res.status);
              setLoggedIn(true);
              setCurrentUserData(res.data);
              saveCurrentUserDataToLocalStorage(res.data);
            },
            (err) => {
              setTokenAuthResStatus(err);
            },
          )
          .finally(() => {
            setIsLoadingData(false);
          })
      }
    }, []
  );

  React.useEffect(() => {
    tokenCheck();
    handleResetResStatus();
  }, [history.location])

  const handleSignin = (data) => {
    setIsLoadingSignin(true);
    mainApi.authorize(data)
      .then((res) => {
        setAuthResStatus(res.status);
        localStorage.setItem('jwt', res.data.token);
        setLoggedIn(true);
        tokenCheck();
        history.push('/movies');
      })
      .catch((err) => {
        setAuthResStatus(err);
      })
      .finally(() => {
        setIsLoadingSignin(false);
      })
  };

  const handleSignup = (data) => {
    setIsLoadingSignup(true);
    mainApi.register(data)
      .then((res) => {
        setRegistrationResStatus(res.status);
        handleSignin({
          email: data.email,
          password: data.password
        },);

      })
      .catch((err) => {
        setRegistrationResStatus(err);
      })
      .finally(() => {
        setIsLoadingSignup(false);
      })
  };

  const handleSignOut = (evt) => {
    evt.preventDefault();
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    history.push('/');
  };

  const handleUpdateCurrenUser = (data) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsLoadingUpdateCurrentUser(true);
      mainApi.updateCurrentUserProfile(data, token)
        .then((res) => {
          setCurrentUserData(res.data);
          setUpdateCurrentUserResStatus(res.status);
          saveCurrentUserDataToLocalStorage(res.data);
        })
        .catch((err) => {
          setUpdateCurrentUserResStatus(err);
        })
        .finally(() => {
          setIsLoadingUpdateCurrentUser(false);
        })
    };
  };

  const getSavedMoviesIds = () => {
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies'));
    const savedMoviesIds = [];

    savedMovies.forEach((savedMovie) => {
      savedMoviesIds.push(savedMovie.movieId);
    });

    return savedMoviesIds;
  };

  const markAsSaved = (foundMoviesArr, savedMoviesIdsArr) => {
    foundMoviesArr.forEach((foundMovie) => {
      foundMovie.saved = savedMoviesIdsArr.some((savedMovieId) => savedMovieId === foundMovie.id);
    })

    return foundMoviesArr;
  }

  const handleSearchMoviesData = (searchQuery) => {
    setIsLoadingMoviesData(true);
    moviesApi.getMoviesData()
      .then((res) => {
        setMoviesApiResStatus(res.status);
        const foundMoviesArr = searchFilter(searchQuery, res.data);
        const savedMoviesIdsArr = getSavedMoviesIds();

        setMoviesData(markAsSaved(foundMoviesArr, savedMoviesIdsArr));
      })
      .catch((err) => {
        console.log(err);
        setMoviesApiResStatus(err)
      })
      .finally(() => {
        setIsLoadingMoviesData(false);
      })
  };

  const handleSaveFavoriteMovie = (data) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.saveMovie(data, token)
        .then((res) => {
          setSaveFavoriteMovieResStatus(res.status);
        })
        .catch((err) => {
          setSaveFavoriteMovieResStatus(err);
          console.log(err);
        })
        .finally(() => {
          handleGetSavedMovies();
        })
    } else {
      history.push('/signin');
    };
  };

  const handleGetSavedMovies = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.getSavedMovies(token)
        .then((res) => {
          setSavedMoviesData(res.data);
          localStorage.setItem('saved-movies', JSON.stringify(res.data));
          setGetSavedMoviesResStatus(res.status);
        })
        .catch((err) => {
          setGetSavedMoviesResStatus(err);
          console.log(err);
        })
    };
  };

  const handleDeleteSavedMovie = (id) => {
    const token = localStorage.getItem('jwt');

    if (token) {
      mainApi.deleteSavedMovie(id, token)
        .then((res) => {
          setDeleteSavedMovieResStatus(res.status);
        })
        .catch((err) => {
          setDeleteSavedMovieResStatus(err);
          console.log(err);
        })
        .finally(() => {
          handleGetSavedMovies();
        })
    };
  }

  const setOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const exclusionRoutesPathsAuthArray = [
    '/signin',
    '/signup',
  ];

  const exclusionRoutesPathsArrayFooter = [
    '/signin',
    '/signup',
    '/profile',
  ];

  React.useEffect(() => {
    handleGetSavedMovies();
  }, [])

  React.useEffect(() => {

    const handleWindowLoad = () => {
      setIsLoadingData(false);
    };

    window.addEventListener('load', handleWindowLoad);

    return () => window.removeEventListener('load', handleWindowLoad);
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUserData}>
      <div className="app">
        {useRouteMatch(exclusionRoutesPathsAuthArray) ? null : (
          <Header
            loggedIn={loggedIn}
            onOpenMenu={setOpenMenu}
          />
        )}
        <Switch>
          <Route
            exact
            path="/"
          >
            {isLoadingData ? (
              <Preloader />
            ) : (
              <Main />
            )}

          </Route>
          <ProtectedRoute
            path="/movies"
            redirectTo="/"
            loggedIn={loggedIn}
            component={Movies}
            isLoadingData={isLoadingMoviesData}
            moviesData={moviesData}
            resStatus={moviesApiResStatus}
            onSubmit={handleSearchMoviesData}
            moviesData={moviesData}
            onSaveFavoriteMovie={handleSaveFavoriteMovie}
          />
          <ProtectedRoute
            path="/saved-movies"
            redirectTo="/"
            loggedIn={loggedIn}
            component={SavedMovies}
            savedMoviesData={savedMoviesData}
            onDeleteSavedMovie={handleDeleteSavedMovie}
          />
          <ProtectedRoute
            path="/profile"
            redirectTo="/"
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            onUpdateCurrentUser={handleUpdateCurrenUser}
            isLoadingUpdateCurrentUser={isLoadingUpdateCurrentUser}
            updUserResStatus={updateCurrentUserResStatus}
            component={Profile}
          />
          <Route
            path="/signup"
          >
            <Register
              onSignup={handleSignup}
              regResStatus={registrationResStatus}
              authResStatus={authResStatus}
              isLoadingSignup={isLoadingSignup || isLoadingData || isLoadingSignin}
            />
          </Route>
          <Route
            path="/signin"
          >
            <Login
              onSignin={handleSignin}
              authResStatus={authResStatus}
              tokenResStatus={tokenAuthResStatus}
              isLoadingSignin={isLoadingSignup || isLoadingData || isLoadingSignin}
            />
          </Route>
          <Route
            path="*"
          >
            <NotFound />
          </Route>
        </Switch>
        {useRouteMatch(exclusionRoutesPathsArrayFooter) ? null : (
          <Footer />
        )}
        {menuIsOpen && (
          <Modal
            modalIsOpen={menuIsOpen}
            onModalClose={setCloseMenu}
          >
            <Modal.Header />
            <Modal.Body>
              <MobileNavigation
                onModalClose={setCloseMenu}
              />
            </Modal.Body>
            <Modal.Footer>
              <MobileAccountNavList
                onModalClose={setCloseMenu}
              />
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
