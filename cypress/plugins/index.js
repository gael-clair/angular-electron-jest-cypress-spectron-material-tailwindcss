const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
const registerCodeCoverageTasks = require('@cypress/code-coverage/task');

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
  return registerCodeCoverageTasks(on, config); // activate coverage task
};
