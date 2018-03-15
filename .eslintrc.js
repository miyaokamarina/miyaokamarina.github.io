module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['babel'],
  rules: {
    'arrow-parens': 'off',
    'max-len': ['error', 160],
    'import/prefer-default-export': 'off',

    'new-cap': 'off',
    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',
  },
};
