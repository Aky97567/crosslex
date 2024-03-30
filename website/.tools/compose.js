const { flow } = require('lodash');

module.exports = {
  /**
   * Creates a function used to build a lint-staged configuration object using the given composable rules
   * @param  {...any} rules The modular functions for composing the configuration object
   * @returns A function that will enhance an initial lint-staged configuration object with the given configuration rules
   */
  composeConfig:
    (...rules) =>
    (initialConfig = {}) =>
      flow(...rules)(initialConfig),
};
