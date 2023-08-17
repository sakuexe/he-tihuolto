/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const fonts = require('tailwindcss/defaultTheme').fontFamily

// made with: https://uicolors.app/create
colors['grove'] = {
  50: '#f7f9f4',
  100: '#ebf3e5',
  200: '#d8e7cb',
  300: '#aecc96',
  400: '#90b573',
  500: '#6f984f',
  600: '#597c3d',
  700: '#486332',
  800: '#3b4f2c',
  900: '#304225',
  950: '#172310',
}

const primary = colors.stone
const secondary = colors.gray

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      ...fonts,
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '400px',
        semitall: { raw: '(min-height: 400px)' },
        tall: { raw: '(min-height: 760px)' },
      },
      colors: {
        grove: {},
        primary: { ...primary, DEFAULT: primary[900] },
        secondary: { ...secondary, DEFAULT: secondary[800] },
      },
    },
  },
  plugins: [],
}
