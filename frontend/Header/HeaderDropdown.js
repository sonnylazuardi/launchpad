/* @flow */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './HeaderDropdown.less';

export default class HeaderDropdown extends Component {
  props: {|
    open: boolean,
    onClose: () => void,
    children?: any,
    button: React$Element<*>,
  |};

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = (event: any) => {
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.props.onClose();
    }
  };

  render() {
    const style = {};

    if (!this.props.open) {
      style.display = 'none';
    }

    return (
      <div className="HeaderDropdown">
        {this.props.button}

        <div className="HeaderDropdown-Dropdown" style={style}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
