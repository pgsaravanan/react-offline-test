const { defaults } = require('jest-config');

module.exports = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'es6'],
  modulePaths: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleDirectories: [
    ...defaults.moduleDirectories,
    '<rootDir>/node_modules'],
  moduleNameMapper: {
    '\\.(sa|sc|c)ss$': 'identity-obj-proxy',
    '@(components|services)/(.*)$': '<rootDir>/src/$1/$2',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.(js|jsx|es6)?$': 'babel-jest',
  },
};
