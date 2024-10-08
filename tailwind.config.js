/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        be: ['Be Vietnam Pro', 'sans-serif'],
      },
      backgroundColor: {
        inputSearch: '#EFF0F6',
        sub: "#DB4444",
        buttonSubmit:"#DB4444",
      },
      borderColor: {
        footer: "#4D566B",
        divBtn :'#9096A2'
      },

      textColor: {
        // custom color
        Neutral: {
          50: '#F4F4F6',//50
          100: '#E9EAEC', // 100
          200: '#D1D4DB', // 200
          300: '#9096A2', // 300
          400: '#4D566B', // 400
          500: '#202C46', // 500
          600: '#1B253C', // 600
        },
        Blue: {
          100: '#F5F7FE', // 100
          200: '#EAEFFD', // 200
          300: '#ADBEF7', // 300
          400: '#5A7DEE', // 400
          500: '#315CEA', // 500
          600: '#2A4EC7', // 600
          700: '#2240A4', // 700
        },
        Purple: {
          100: '#F8F5FE', // 100
          200: '#F1ECFC', // 200
          300: '#C9B2F3', // 300
          400: '#9265E8', // 400
          500: '#773FE2', // 500
          600: '#6436BF', // 600
        },
        Magenta: {
          100: '#FEF6F8', // 100
          200: '#FCEEF1', // 200
          300: '#F4BAC8', // 300
          400: '#E97591', // 400
          500: '#E35275', // 500
          600: '#C24764', // 600
        },
        Green: {
          100: '#F4FDF7', // 100
          200: '#E9FAEF', // 200
          300: '#A9EBBF', // 300
          400: '#52D880', // 400
          500: '#27CE60', // 500
          600: '#21AF52', // 600
        },
        Red_E: {
          100: '#FCE9EC', // 100
          200: '#F9D2D9', // 200
          300: '#F2A6B4', // 300
          400: '#E9677F', // 400
          500: '#DF2648', // 500
          600: '#B71F3B', // 600
        },
        Yellow: {
          100: '#FEF3E6', // 100
          200: '#FDE7CD', // 200
          300: '#FCCF9C ', // 300
          400: '#FAB261', // 400
          500: '#F89118', // 500
          600: '#C77414', // 600
        }
      }


    },
  },
  plugins: [],
}

