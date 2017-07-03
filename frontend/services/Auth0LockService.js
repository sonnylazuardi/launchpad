/* @flow */

let lock: any;

export async function getLock() {
  if (!lock) {
    await new Promise(resolve => {
      (require: any).ensure(
        ['auth0-lock'],
        () => {
          lock = require('auth0-lock').default;
          resolve();
        },
        'auth0-lock',
      );
    });
  }
  return lock;
}
