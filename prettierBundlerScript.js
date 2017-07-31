var npm = require('npm-programmatic');
npm.install(['CompuIves/custom-prettier-codesandbox'], {
  //npm.install(['prettier@compuives/prettier'], {
  // cwd to seperate directory should be working but it isn't???
  cwd: './node_modules',
  save: true
}).then(function() {
  console.log('Success!!');
}).catch(function() {
  console.log('unable to install package');
});
