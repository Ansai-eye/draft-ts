module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'cbued',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-no-target-blank': ['off'],
  },
};
