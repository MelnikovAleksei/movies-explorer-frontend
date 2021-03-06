import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

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

import Footer from '../Footer/Footer';

import NotFound from '../NotFound/NotFound';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const history = useHistory();

  const handleSignup = () => {
    setLoggedIn(true);
  };

  const handleSignin = () => {
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    history.push('/');
  };

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

  const currentUserData = {
    name: 'Алексей',
    email: 'meln.a.a@yandex.ru'
  };

  return (
    <div className="app">
      {useRouteMatch(exclusionRoutesPathsAuthArray) ? null : (
        <Header
          loggedIn={loggedIn}
          onSignup={handleSignup}
          onSignin={handleSignin}
          onOpenMenu={setOpenMenu}
        />
      )}
      <Switch>
        <Route
          exact
          path="/"
        >
          <Main />
        </Route>
        <Route
          path="/movies"
        >
          <Movies />
        </Route>
        <Route
          path="/saved-movies"
        >
          <SavedMovies />
        </Route>
        <Route
          path="/profile"
        >
          <Profile
            currentUserData={currentUserData}
            onSignOut={handleSignOut}
          />
        </Route>
        <Route
          path="/signup"
        >
          <Register />
        </Route>
        <Route
          path="/signin"
        >
          <Login />
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
  );
}

export default App;
