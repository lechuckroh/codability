module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  plugins: [
    'compat',
    'html'
  ],
  'rules': {
    indent: ['error',
      2, {
        SwitchCase: 1
      }],
    semi: ['error',
      'always'
    ],
    'max-len': ['warn', {
      code: 80,
      tabWidth: 2,
      ignoreUrls: true
    }],
    'no-var': ['warn'],
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
    'compat/compat': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  browserslist: ['Chorme', 'Firefox', 'Edge', 'Safari'],
};
