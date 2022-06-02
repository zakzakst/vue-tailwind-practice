const { colorList } = require('./colorList');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary
        'primary': colorList.red['50'],
        'primary-hover': '#1976D2',
        'primary-focus': '#1976D2',
        'primary-ring': '#0D47A1',
        'primary-light': '#E3F2FD',
        'primary-light-hover': '#BBDEFB',
        'primary-light-focus': '#BBDEFB',
        'primary-border': '#0D47A1',
        // secondary
        'secondary': '',
        'secondary-hover': '',
        'secondary-focus': '',
        'secondary-ring': '',
        'secondary-light': '',
        'secondary-light-hover': '',
        // success
        'success': '',
        'success-hover': '',
        'success-focus': '',
        'success-ring': '',
        'success-light': '',
        'success-light-hover': '',
        // danger
        'danger': '',
        'danger-hover': '',
        'danger-focus': '',
        'danger-ring': '',
        'danger-light': '',
        'danger-light-hover': '',
        // warning
        'warning': '',
        'warning-hover': '',
        'warning-focus': '',
        'warning-ring': '',
        'warning-light': '',
        'warning-light-hover': '',
        // info
        'info': '',
        'info-hover': '',
        'info-focus': '',
        'info-ring': '',
        'info-light': '',
        'info-light-hover': '',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
