/* @flow */

import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
// might need to do import BrowserRouter as Router in below line (instead of just import Router)
import { Switch, Router, Route, Link, BrowserRouter } from 'react-router-dom';
//import App from './App';
import './index.less';
import PadSplit from './PadSplit';
import PadContainer from './PadContainer';
import ListContainer from './ListContainer';
import history from './history';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: process.env.REACT_APP_LAUNCHPAD_API_URL,
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      const token = localStorage.getItem('LAUNCHPAD_TOKEN');
      if (token) {
        req.options.headers['authorization'] = `Bearer: ${token}`;
      }
      next();
    },
  },
]);

const apolloClient = new ApolloClient({
  networkInterface,
});

render(
  // don't need to pass down history in react-router v4 according to stack overflow??
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/list" component={ListContainer} />
        <Route
          exact
          path="/"
          render={() => {
            return <PadContainer id={null} />;
          }}
        />
        <Route
          exact
          path="/new"
          render={() => {
            return <PadContainer id={null} />;
          }}
        />
        <Route
          exact
          path="/:id"
          render={id => {
            return <PadContainer id={id.match.params.id} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
