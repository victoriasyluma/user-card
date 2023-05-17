/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['montserrat', 'sans-serif'],
      },
      colors: {
        'purple-1': '#8173D6',
        'purple-2': '#4D4B73',
        'purple-3': '#471CA9',
        'purple-4': '#5736A3',
        'purple-5': '#4B2A99',
        'blue-1': '#D3DEF5',
        'yellow-1': '#F9E4DE',
      },
      width: {
        1: '380px',
      },
      height: {
        1: '460px',
      },
      borderRadius: {
        20: '20px',
      },
      boxShadow: {
        md: '-2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px #0000003B',
      },
    },
  },
  plugins: [],
};
