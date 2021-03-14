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

import AUTH_SUCCESS_TEXTS from '../../constants/auth-success-texts';
import SAVE_MOVIE_ERROR_TEXTS from '../../constants/save-movie-error-texts';
import DELETE_MOVIE_ERROR_TEXTS from '../../constants/delete-movie-error-texts';
import PROFILE_UPDATE_SUCCESS_TEXT from '../../constants/profile-update-success-text';

import Header from '../Header/Header';
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
import Menu from '../Menu/Menu';
import NotificationModal from '../NotificationModal/NotificationModal';


function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoadingData, setIsLoadingData] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [notificationModalIsOpen, setNotificationModalIsOpen] = React.useState(false);

  const [notificationText, setNotificationText] = React.useState('');

  const [currentUserData, setCurrentUserData] = React.useState({});

  const [moviesData, setMoviesData] = React.useState([]);

  const [foundSavedMoviesData, setFoundSavedMoviesData] = React.useState([]);

  const [isSavedMoviesEmpty, setIsSavedMoviesEmpty] = React.useState(false);

  const [isNoMoviesFound, setIsNoMoviesFound] = React.useState(false);
  const [isNoSavedMoviesFound, setIsNoSavedMoviesFound] = React.useState(false);

  const [isLoadingMoviesData, setIsLoadingMoviesData] = React.useState(false);
  const [isLoadingSignin, setIsLoadingSignin] = React.useState(false);
  const [isLoadingSignup, setIsLoadingSignup] = React.useState(false);
  const [isLoadingUpdateCurrentUser, setIsLoadingUpdateCurrentUser] = React.useState(false);

  const [authResStatus, setAuthResStatus] = React.useState(null);
  const [tokenAuthResStatus, setTokenAuthResStatus] = React.useState(null);
  const [registrationResStatus, setRegistrationResStatus] = React.useState(null);
  const [updateCurrentUserResStatus, setUpdateCurrentUserResStatus] = React.useState(null);
  const [moviesApiResStatus, setMoviesApiResStatus] = React.useState(null);
  const [saveFavoriteMovieResStatus, setSaveFavoriteMovieResStatus] = React.useState(null);
  const [getSavedMoviesResStatus, setGetSavedMoviesResStatus] = React.useState(null);
  const [deleteSavedMovieResStatus, setDeleteSavedMovieResStatus] = React.useState(null);

  const history = useHistory();

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

  const handleSignin = (data) => {
    setIsLoadingSignin(true);
    mainApi.authorize(data)
      .then((res) => {
        setAuthResStatus(res.status);
        localStorage.setItem('jwt', res.data.token);
        setLoggedIn(true);
        history.push('/movies');
        setOpenNotificationModal();
        setNotificationText(AUTH_SUCCESS_TEXTS.BASE_TEXT);
      })
      .then(() => {
        checkToken();
      })
      .catch((err) => {
        setAuthResStatus(err);
      })
      .finally(() => {
        setIsLoadingSignin(false);
      })
  };

  const handleSignOut = (evt) => {
    evt.preventDefault();
    setLoggedIn(false);
    setMoviesData([]);
    setCurrentUserData({});
    setFoundSavedMoviesData([]);
    localStorage.clear();
    history.push('/');
  };

  const checkToken = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.checkToken(token)
        .then((res) => {
          setTokenAuthResStatus(res.status);
          setCurrentUserData(res.data);
          setLoggedIn(true);
        })
        .catch((err) => {
          setTokenAuthResStatus(err)
        })
    }
  }

  const handleUpdateCurrenUser = (data) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsLoadingUpdateCurrentUser(true);
      mainApi.updateCurrentUserProfile(data, token)
        .then((res) => {
          setCurrentUserData(res.data);
          setUpdateCurrentUserResStatus(res.status);
          localStorage.setItem('currentUserData', JSON.stringify(res.data));
          setOpenNotificationModal();
          setNotificationText(PROFILE_UPDATE_SUCCESS_TEXT.BASE_TEXT);
        })
        .catch((err) => {
          setUpdateCurrentUserResStatus(err);
        })
        .finally(() => {
          setIsLoadingUpdateCurrentUser(false);
        })
    };
  };

  const handleSearchMoviesData = (searchQueries = {}) => {
    setIsLoadingMoviesData(true);
    moviesApi.getMoviesData()
      .then((res) => {
        setMoviesApiResStatus(res.status);

        const moviesData = res.data;

        const filteredMovies = searchFilter(searchQueries, moviesData);

        if (filteredMovies.length === 0) {
          setIsNoMoviesFound(true);
        } else {
          setIsNoMoviesFound(false);
        }

        setMoviesData(markAsSaved(filteredMovies));
      })
      .catch((err) => {
        console.log(err);
        setMoviesApiResStatus(err)
      })
      .finally(() => {
        setIsLoadingMoviesData(false);
      })
  };

  const handleSearchSavedMoviesData = (searchQueries = {}) => {
    const token = localStorage.getItem('jwt');

    if (token){
      setIsLoadingMoviesData(true);
      mainApi.getSavedMovies(token)
        .then((res) => {
          setGetSavedMoviesResStatus(res.status);

          if (res.data.length === 0) {
            setIsSavedMoviesEmpty(true);
            setFoundSavedMoviesData(res.data);
            return;
          } else {
            setIsSavedMoviesEmpty(false);
          }

          const savedMoviesData = res.data.reverse();

          const filteredSavedMovies = searchFilter(searchQueries, savedMoviesData);

          if (filteredSavedMovies.length === 0) {
            setIsNoSavedMoviesFound(true);
          } else {
            setIsNoSavedMoviesFound(false);
          }

          setFoundSavedMoviesData(filteredSavedMovies)
        })
        .catch((err) => {
          console.log(err);
          setMoviesApiResStatus(err)
        })
        .finally(() => {
          setIsLoadingMoviesData(false);
        })
    }
  }

  React.useEffect(() => {
    checkToken();
    handleSearchSavedMoviesData();
  }, [])

  const getInitialSavedMoviesIds = () => {
    const initialSavedMoviesIds = [];

    foundSavedMoviesData.forEach((savedMovie) => {
      initialSavedMoviesIds.push(savedMovie.movieId);
    });

    return initialSavedMoviesIds;
  };

  const markAsSaved = (foundMoviesArr) => {
    const initialSavedMoviesIdsArr = getInitialSavedMoviesIds();
    foundMoviesArr.forEach((foundMovie) => {
      foundMovie.saved = initialSavedMoviesIdsArr.some((savedMovieId) => savedMovieId === foundMovie.id);
    })

    foundSavedMoviesData.forEach((savedMovie) => {
      foundMoviesArr.forEach((foundMovie) => {
        if (foundMovie.id === savedMovie.movieId) {
          foundMovie._id = savedMovie._id;
        }
      })
    })
    return foundMoviesArr;
  }

  const handleSaveFavoriteMovie = (data) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.saveMovie(data, token)
        .then((res) => {
          setSaveFavoriteMovieResStatus(res.status);
        })
        .catch((err) => {
          setSaveFavoriteMovieResStatus(err);
          setOpenNotificationModal();
          setNotificationText(`${SAVE_MOVIE_ERROR_TEXTS.BASE_TEXT} ${err}`)
          console.log(err);
        })
        .finally(() => {
          handleSearchSavedMoviesData();
        })
    } else {
      history.push('/signin');
    };
  };

  const markAsUnsaved = (id) => {
    moviesData.forEach((movie) => {
      if (movie.saved) {
        if (movie._id === id) {
          movie.saved = false;
          movie._id = null;
        }
      }
    })
  }

  const handleDeleteSavedMovie = (id) => {
    const token = localStorage.getItem('jwt');

    if (token) {
      mainApi.deleteSavedMovie(id, token)
        .then((res) => {
          setDeleteSavedMovieResStatus(res.status);
          markAsUnsaved(id);
        })
        .catch((err) => {
          setDeleteSavedMovieResStatus(err);
          setOpenNotificationModal();
          setNotificationText(`${DELETE_MOVIE_ERROR_TEXTS.BASE_TEXT} ${err}`)
          console.log(err);
        })
        .finally(() => {
          handleSearchSavedMoviesData();
        })
    };
  }

  const setOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const setOpenNotificationModal = () => {
    setNotificationModalIsOpen(true);
  }

  const setCloseNotificationModal = () => {
    setNotificationText('');
    setNotificationModalIsOpen(false);
  }

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
            isNoMoviesFound={isNoMoviesFound}
            isLoadingData={isLoadingMoviesData}
            resStatus={moviesApiResStatus}
            onSubmit={handleSearchMoviesData}
            moviesData={markAsSaved(moviesData)}
            onSaveMovie={handleSaveFavoriteMovie}
            onDeleteSavedMovie={handleDeleteSavedMovie}
          />
          <ProtectedRoute
            path="/saved-movies"
            redirectTo="/"
            loggedIn={loggedIn}
            isSavedMoviesEmpty={isSavedMoviesEmpty}
            component={SavedMovies}
            isLoadingData={isLoadingMoviesData}
            isNoSavedMoviesFound={isNoSavedMoviesFound}
            foundSavedMoviesData={foundSavedMoviesData}
            handleSearchSavedMoviesData={handleSearchSavedMoviesData}
            onDeleteSavedMovie={handleDeleteSavedMovie}
            getSavedMoviesResStatus={getSavedMoviesResStatus}
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
          <Menu
            isOpen={menuIsOpen}
            onClose={setCloseMenu}
          />
        )}
        {notificationModalIsOpen && (
          <NotificationModal
            isOpen={notificationModalIsOpen}
            onClose={setCloseNotificationModal}
            notificationText={notificationText}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
