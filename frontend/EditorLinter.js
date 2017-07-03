/* @flow */

import { getLinter } from './services/CodeService';

export default async function register(CodeMirror: any) {
  const lint = await getLinter();

  CodeMirror.registerGlobalHelper(
    'lint',
    'babel',
    () => true,
    (text, options) => {
      const errors = lint(text);
      return errors.map(error => ({
        message: error.message,
        severity: error.severity === 2 ? 'error' : 'warning',
        from: CodeMirror.Pos(error.line - 1, error.column),
        to: CodeMirror.Pos(
          (error.endLine || error.line) - 1,
          error.endColumn || error.column + 1,
        ),
      }));
    },
  );
}
