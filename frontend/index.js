/* @flow */

import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './index.less';
import PadContainer from './PadContainer';
import ListContainer from './ListContainer';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: (process.env.REACT_APP_LAUNCHPAD_API_URL: any),
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
          render={({ match, history }) => {
            return <PadContainer id={null} history={history} />;
          }}
        />
        <Route
          exact
          path="/:id"
          render={({ match, history }) => {
            return <PadContainer id={match.params.id} history={history} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
