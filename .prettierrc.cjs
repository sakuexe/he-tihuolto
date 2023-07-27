// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Options} */
const config = {
  plugins: [require.resolve('prettier-plugin-astro')],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}

module.exports = config
