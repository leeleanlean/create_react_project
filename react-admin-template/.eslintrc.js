module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  globals: {
    window: true,
    document: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'standard'
  ],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    },
    'react': {
      'version': '16.9.0'
    }
  },
  rules: {}
}
