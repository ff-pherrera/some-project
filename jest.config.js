module.exports = {
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    './config/',
  ],
  collectCoverageFrom: [
    'src/app/modules/**/**/*.js',
    'src/app/components/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
