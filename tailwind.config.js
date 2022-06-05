const { colorList } = require('./colorList');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // normal
        'normal': colorList.gray['700'],
        'normal-hover': colorList.gray['800'],
        'normal-focus': colorList.gray['800'],
        'normal-ring': colorList.gray['900'],
        'normal-light': colorList.gray['50'],
        'normal-light-hover': colorList.gray['100'],
        'normal-light-focus': colorList.gray['100'],
        'normal-border': colorList.gray['900'],
        // primary
        'primary': colorList.blue['700'],
        'primary-hover': colorList.blue['800'],
        'primary-focus': colorList.blue['800'],
        'primary-ring': colorList.blue['900'],
        'primary-light': colorList.blue['50'],
        'primary-light-hover': colorList.blue['100'],
        'primary-light-focus': colorList.blue['100'],
        'primary-border': colorList.blue['900'],
        // secondary
        'secondary': colorList.blueGray['600'],
        'secondary-hover': colorList.blueGray['700'],
        'secondary-focus': colorList.blueGray['700'],
        'secondary-ring': colorList.blueGray['900'],
        'secondary-light': colorList.blueGray['50'],
        'secondary-light-hover': colorList.blueGray['100'],
        'secondary-light-focus': colorList.blueGray['100'],
        'secondary-border': colorList.blueGray['900'],
        // success
        'success': colorList.green['700'],
        'success-hover': colorList.green['800'],
        'success-focus': colorList.green['800'],
        'success-ring': colorList.green['900'],
        'success-light': colorList.green['50'],
        'success-light-hover': colorList.green['100'],
        'success-light-focus': colorList.green['100'],
        'success-border': colorList.green['900'],
        // danger
        'danger': colorList.red['600'],
        'danger-hover': colorList.red['700'],
        'danger-focus': colorList.red['700'],
        'danger-ring': colorList.red['900'],
        'danger-light': colorList.red['50'],
        'danger-light-hover': colorList.red['100'],
        'danger-light-focus': colorList.red['100'],
        'danger-border': colorList.red['900'],
        // warning
        'warning': colorList.yellow['700'],
        'warning-hover': colorList.yellow['800'],
        'warning-focus': colorList.yellow['800'],
        'warning-ring': colorList.yellow['900'],
        'warning-light': colorList.yellow['50'],
        'warning-light-hover': colorList.yellow['100'],
        'warning-light-focus': colorList.yellow['100'],
        'warning-border': colorList.yellow['900'],
        // info
        'info': colorList.cyan['600'],
        'info-hover': colorList.cyan['700'],
        'info-focus': colorList.cyan['700'],
        'info-ring': colorList.cyan['900'],
        'info-light': colorList.cyan['50'],
        'info-light-hover': colorList.cyan['100'],
        'info-light-focus': colorList.cyan['100'],
        'info-border': colorList.cyan['900'],
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
