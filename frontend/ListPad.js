/* @flow */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { Pad } from './types';
import { getPrismHighlighter } from './services/CodeService';
import './ListPad.less';

type ListPadProps = {|
  pad: Pad,
|};

export default class ListPad extends Component {
  props: ListPadProps;

  state = ({
    code: null,
  }: {
    code: ?string,
  });

  componentDidMount() {
    this.hilightCode();
  }

  componentDidUpdate(nextProps: ListPadProps) {
    if (nextProps.pad.code !== this.props.pad.code) {
      this.setState({
        code: null,
      });
      this.hilightCode();
    }
  }

  async hilightCode() {
    const code = (await getPrismHighlighter())(
      this.props.pad.code,
      'javascript',
    );
    this.setState({
      code,
    });
  }

  renderCode() {
    if (this.state.code) {
      return (
        <div
          className="ListPad-Code"
          dangerouslySetInnerHTML={{
            __html: this.state.code,
          }}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    const pad = this.props.pad;
    const padUser = pad.user || {};
    return (
      <div className="ListPad">
        <Link className="ListPad-Link" to={`${this.props.pad.id}`}>
          Pads you created
          <div className="ListPad-Header">
            <div className="ListPad-HeaderUsername">
              {padUser.githubUsername || 'Unknown'}
            </div>
            <div className="ListPad-HeaderTitle">
              {this.props.pad.title || '(Untitled)'}
            </div>
          </div>
          {this.renderCode()}
        </Link>
      </div>
    );
  }
}
