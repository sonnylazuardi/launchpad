/* @flow */

export type User = {
  id: string,
  githubUsername: string,
  pads: Array<Pad>,
};

export type Context = {
  key: string,
  value?: string,
};

export type Dependency = {
  name: string,
  version: ?string,
};

export type Pad = {
  id: string,
  title: ?string,
  description: ?string,
  code: string,
  url: string,
  user: ?User,
  context: ?Array<Context>,
  dependencies: ?Array<Dependency>,
  draft?: ?Pad,
  isDeployed?: boolean,
  isDraft?: boolean,
  defaultQuery: ?string,
  defaultVariables: ?string,
  token: ?string,
};

export type ApolloData<Key: string, Result> = {
  [Key]: Result,
  loading: boolean,
  error?: {
    message: string,
  },
  refetch: () => Promise<{ data: { [Key]: Result } }>,
};

export type ApolloMutationResult<Key: string, Result> = {
  data: {|
    [Key]: Result,
  |},
};

export type DeployPayload = {|
  code: string,
  deployedCode: string,
  context: Array<Context>,
  dependencies: Array<string>,
|};
