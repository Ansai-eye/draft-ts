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
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2], // 2 spaces === 1 tab
    '@typescript-eslint/no-inferrable-types': ['off', 0]
  },
};
