/* @flow */

export default {
  getItem(id: string, key: string): string {
    return window.localStorage.getItem(getQueryStorageKey(id, key));
  },

  setItem(id: string, key: string, value: string): void {
    window.localStorage.setItem(getQueryStorageKey(id, key), value);
  },

  deleteItem(id: string, key: string): void {
    return window.localStorage.deleteItem(getQueryStorageKey(id, key));
  },
};

function getQueryStorageKey(id: string, key: string): string {
  return `launchpad:${id}:graphiql:${key}`;
}
