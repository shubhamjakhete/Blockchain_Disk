module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom color palette
        'primary': '#DAFFFB',
        'secondary': '#64CCC5',
        'tertiary': '#176B87',
        'background': '#001C30',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Include the @tailwindcss/forms plugin here
    // Add any other Tailwind CSS plugins you need
  ],
  // Other Tailwind CSS configurations...
};
