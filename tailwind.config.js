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
        'pink-1': '#EBD8FF',
        'yellow-1': '#F9E4DE',
        'black-1': '#373737',
        'green-1': '#5DD3A8',
      },
      width: {
        tweet: '380px',
        15: '62px',
      },
      height: {
        tweet: '460px',
        15: '62px',
      },
      borderRadius: {
        20: '20px',
        10: '10.3108px',
      },
      boxShadow: {
        md: '-2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px #0000003B',
        button: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
      },
      margin: {
        26: '26px',
      },
      padding: {
        14: '14px',
      },
      lineHeight: {
        24: '24px',
      },
      fontSize: {
        20: '20px',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn ease-in 0.2s',
      },
    },
  },
  plugins: [],
};
