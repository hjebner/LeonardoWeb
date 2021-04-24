
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {
      colors: {
        'woodsmoke': {
          '50': '#f4f4f4', 
          '100': '#e8e8e8', 
          '200': '#c6c6c6', 
          '300': '#a3a3a3', 
          '400': '#5f5f5f', 
          '500': '#1a1a1a', 
          '600': '#171717', 
          '700': '#141414', 
          '800': '#101010', 
          '900': '#0d0d0d'
        },
        'wheat': {
          '50': '#fefdfb', 
          '100': '#fdfbf6', 
          '200': '#faf5e9', 
          '300': '#f7eedc', 
          '400': '#f2e2c1', 
          '500': '#ecd5a7', 
          '600': '#d4c096', 
          '700': '#b1a07d', 
          '800': '#8e8064', 
          '900': '#746852'
        },  
      }, 
      
      fontFamily: {
        'oswald': ['oswald', 'sans-serif']
      },

    }
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }