module.exports = {
  testEnvironment: 'node',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/**/**/**.js'],
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
};
