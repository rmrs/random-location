module.exports = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  useTabs: false,
  parser: 'babel',
  overrides: [
    {
      files: '*.json',
      options: { parser: 'json', printWidth: 200 },
    },
  ],
};
