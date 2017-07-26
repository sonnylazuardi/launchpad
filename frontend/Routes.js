/* @flow */

import React, {Component} from 'react';
import { Switch, Router, Route, Link } from 'react-router-dom';
import PadSplit from './PadSplit';
import PadContainer from './PadContainer';
import ListContainer from './ListContainer';
import history from './history';

const Routes = (
  <Switch>
    <Route exact path="/list" component={ListContainer} />
    <Route exact path="/" render={() => {
      return <PadContainer id={null} />;
      }} 
    />
    <Route exact path="/new" render={() => {
      return <PadContainer id={null} />;
      }} 
    />
    <Route exact path="/:id" render={id => {
      return <PadContainer id={id.match.params.id} />;
      }}
    /> 
  </Switch>
);

export {Routes};
