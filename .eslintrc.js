module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error',
      {
        'code': 80,
        'ignoreStrings': false,
        'ignoreComments': false,
      }],
    'quote-props': ['error', 'consistent'],
  },
};
