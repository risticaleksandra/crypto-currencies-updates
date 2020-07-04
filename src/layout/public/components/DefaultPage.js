import React from "react";
import { BrowserRouter as Router, Switch, Redirect, useHistory } from "react-router-dom";
import Profile from '../../private/components/Profile'
import PrivateRoute from '../../private/PrivateRoute'
import PublicRoute from '../../public/PublicRoute'
import Home from './Home'
import Navigation from './Navigation'

const DefaultPage = () => {
  const history = useHistory();
  return (
    <Router>
      <Navigation />
      <Switch>
        <PublicRoute component={Home} path="/home" />
        <PrivateRoute component={Profile} path="/profile" />
        <Redirect from="/" to="home" />
      </Switch>
    </Router>
  );
};

export default DefaultPage;
