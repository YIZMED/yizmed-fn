/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myBlue: '#1D5894',
        mylightBlue: '#149494',
        myBrown: '#BC5B07',
        myBackgoundColor: '#78a1e3',
        myBgColor: '#f5f7fa',
      },
      backgroundImage: {
        tbanner:
          "url('./assets/Image/Testimonial-banner.jpg')",
        thomebanner:
          "url('./assets/Image/home-bottom-banner.svg')",
        blogImage:
          "url('./assets/Image/room1.jpg')",
      },
    },
    plugins: [],
  },
};
