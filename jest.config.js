module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tests/unit/tsconfig.json',
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/unit/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/tests/unit/setup.ts',
  ],
  coverageDirectory: '<rootDir>/tests/unit/report',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/tests/unit/report',
        outputName: 'unit_test_report.xml',
      },
    ],
  ],
};
