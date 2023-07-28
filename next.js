const importRules = require('./configs/import-rules');

module.exports = {
  extends: [
    '@wirthus/default/configs/base',
    '@wirthus/default/configs/typescript',
  ],
  env: {
    browser: true
  },
  ignorePatterns: [
    '.next'
  ],
  rules: importRules
};
