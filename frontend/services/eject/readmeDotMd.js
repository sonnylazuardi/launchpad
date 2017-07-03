/* @flow */

// replace: name, padId
// TODO: list all secrets that need to be provided.

export default `# {{name}}

{{description}}

This project was created with [Apollo Launchpad](https://launchpad.graphql.com)

You can see the original pad at [https://launchpad.graphql.com/{{padId}}](https://launchpad.graphql.com/{{padId}})

### Quick start guide

\`\`\`bash
npm install
{{secretsExports}}
npm start
\`\`\`


{{secretsInstructions}}


Happy hacking!

The Apollo team :)
`;
