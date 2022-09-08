module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    indent: [
      'error',
      2
    ],
    'no-console': 'off',
    'comma-dangle': [
      'error',
      'never'
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    ]
  }
};
