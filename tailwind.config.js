module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary
        'primary': '#f00',
        'primary-hover': '#df0000',
        'primary-focus': '#df0000',
        'primary-ring': '#8f0000',
        // secondary
        'secondary': '#f00',
        'secondary-hover': '#df0000',
        'secondary-focus': '#df0000',
        'secondary-ring': '#8f0000',
        // success
        'success': '#f00',
        'success-hover': '#df0000',
        'success-focus': '#df0000',
        'success-ring': '#8f0000',
        // danger
        'danger': '#f00',
        'danger-hover': '#df0000',
        'danger-focus': '#df0000',
        'danger-ring': '#8f0000',
        // warning
        'warning': '#f00',
        'warning-hover': '#df0000',
        'warning-focus': '#df0000',
        'warning-ring': '#8f0000',
      },
    },
  },
  plugins: [],
}
