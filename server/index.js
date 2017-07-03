/* @flow */

import { graphql } from 'graphql';
import type { GraphQLContext } from './types';
import schema from './schema';
import MongoProvider from './MongoProvider';
import WebtaskProvider from './WebtaskProvider';
import UserModel from './UserModel';

type WebtaskContext = {
  body: {
    query: string,
    variables: any,
  },
  headers: { [string]: string },
  secrets: {
    WT_TOKEN: string,
    WT_API: string,
    MONGODB_URL: string,
    AUTH0_SECRET: string,
    WT_NO_PROXY?: string,
    WT_SINGLE_TENANT_CONTAINER?: string,
  },
};

async function runGraphQL(context: WebtaskContext) {
  const { query, variables = {} } = context.body;

  const user = await UserModel.verify(
    context.headers['authorization'],
    context.secrets.AUTH0_SECRET,
  );

  return graphql(
    schema,
    query,
    {},
    ({
      webtaskToken: context.secrets.WT_TOKEN,
      mongo: new MongoProvider(context.secrets.MONGODB_URL),
      webtask: new WebtaskProvider({
        token: context.secrets.WT_TOKEN,
        webtaskUrl: context.secrets.WT_API,
        singleTenantContainer: context.secrets.WT_SINGLE_TENANT_CONTAINER,
        noProxy: Boolean(context.secrets.WT_NO_PROXY),
      }),
      user,
    }: GraphQLContext),
    variables,
  );
}

// webtask magic

function webtask(context: WebtaskContext, request: any, response: any) {
  response.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  runGraphQL(context).then(result => {
    response.end(JSON.stringify(result));
  });
}

module.exports = webtask;
