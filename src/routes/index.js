import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from '../components/navbar'

import Login from './Login'
import Register from './Register'
import Subscribe from './Subscribe'
import UniversityList from './UniversityList'
import NotFoundPage from "./NotFoundPage"

import {LOGIN_URL, REGISTER_URL, SUBSCRIBE_URL} from '../url'

export default function App() {
  return (
    <Router>
      <div>
      <Navbar />

        <Switch>
          <Route exact path={LOGIN_URL}>
            <Login />
          </Route>
          <Route exact path={REGISTER_URL}>
            <Register />
          </Route>
          <Route exact path={SUBSCRIBE_URL}>
            <Subscribe />
          </Route>
          <Route exact path="/">
            <UniversityList />
          </Route>
          <Route path="**">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
