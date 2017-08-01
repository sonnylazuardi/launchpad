/* @flow */

/**
 * @jest-environment node
 */

import React from 'react';
import { StaticRouter, HashRouter } from 'react-router-dom';
import UserBar from '../Header/UserBar';
import { mount } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

expect.addSnapshotSerializer(serializer);

test('renders normal', () => {
  const component = mount(
    <HashRouter>
      <div>
        <UserBar
          user={{
            id: 'test-id',
            githubUsername: 'example',
            pads: [],
          }}
          onLogin={() => {}}
          onLogout={() => {}}
        />,
      </div>
    </HashRouter>,
  );
  expect(component).toMatchSnapshot();

  component.find('HeaderButton').simulate('click');
  expect(component).toMatchSnapshot();

  component.find('HeaderButton').simulate('click');
  expect(component).toMatchSnapshot();
});