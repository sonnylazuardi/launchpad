/* @flow */

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';
import PadContainer from './PadContainer';
import ListContainer from './ListContainer';

// need to change this structure
// should leave entire nav bar in when switching between pages

export default class App extends Component {
  props: {|
    id: ?string,
    type?: 'pad' | 'list'
  |};

  defaultProps = {
    type: 'pad'
  };

  renderContainer() {
    if (this.props.type === 'list') {
      return <ListContainer />;
    } else {
      return <PadContainer id={this.props.id} />;
    }
  }

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        {this.renderContainer()}
      </ApolloProvider>
    );
  }
}
