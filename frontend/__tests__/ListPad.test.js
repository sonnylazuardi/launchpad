/* @flow */

import React from 'react';
import { MemoryRouter, Switch } from 'react-router-dom';
import ListPad from '../ListPad';
import renderer from 'react-test-renderer';

test('renders normal', () => {
  const component = renderer.create(
    <MemoryRouter>
      <div>
        <ListPad
          pad={{
            id: 'fakeid1',
            title: 'Fake 1',
            description: 'Description 1',
            code: 'code',
            deployedCode: 'deployed code',
            url: 'http://example.com',
            user: {
              id: 'test-ids',
              githubUsername: 'example',
              pads: [],
            },
            context: [
              {
                key: 'secret',
                value: 'secret',
              },
            ],
            dependencies: [
              {
                name: 'graphql-js',
                version: '0.8.9',
              },
            ],
            defaultQuery: '{ hello }',
            defaultVariables: null,
            token: 'test-token-2',
            draft: null,
          }}
        />,
      </div>
    </MemoryRouter>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
