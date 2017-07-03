/* @flow */

import React, { Component } from 'react';
import './HeaderDropdownButton.less';

export default class HeaderDropdownButton extends Component {
  render() {
    return (
      <button className="HeaderDropdownButton" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
