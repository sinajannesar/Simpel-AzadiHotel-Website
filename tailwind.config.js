
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'irancell': ['Irancell', 'sans'],
        'irancell-bold': ['IrancellBold', 'sans'],
        'irancell-light': ['IrancellLight', 'sans'],
      },
      colors: {
        backgroundbutton: '#901D63',
        borderbuttowhait: '#F0F0F0',
        backhero: '#7D1855',
        Whait: '#FDF7FB',
        backbox: '#9E9E9E',
        backkhat: "#F0F0F0",
        backbutton : "#636363",
        backfabutton:"#F6E9EE"
      },
    },
  },
  

};
