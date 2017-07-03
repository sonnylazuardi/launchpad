/* @flow */

import React, { Component } from 'react';
import type { User } from '../types';
import HeaderLogo from './HeaderLogo';
import UserBar from './UserBar';
import HeaderButton from './HeaderButton';
import './Header.less';

export default class ListHeader extends Component {
  props: {
    user: User,
    onLogout: () => any,
  };

  render() {
    return (
      <div className="Header">
        <div className="Header-Left">
          <HeaderLogo />
          <div className="Management-Buttons">
            <HeaderButton onClick={() => (document.location.href = `/new`)}>
              New
            </HeaderButton>
          </div>
        </div>
        <div className="Header-Gap" />
        <div className="Header-Right">
          <UserBar
            user={this.props.user}
            onLogin={() => {}}
            onLogout={this.props.onLogout}
          />
        </div>
      </div>
    );
  }
}
