/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
    xs: '320px',
    sm: '375px',
    sms: '386px',
    smm: '410px',
    sml: '500px',
    md:  '667px',
    mdl: '768px',
    lg:  '960px',
    lgl: '1024px',
    xl: '1280px',
  },
    extend: {
      
      colors: {
        mred: '#BC2B2A',
        secblue: '#184172',
        dgray: '#D0D0D0',
        darkblue: '#0E2744',
        textcol: '#06101B',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poppinsbold: ['Poppins', 'sans-serif', '700'],
        catamara: ["Catamaran", 'sans-serif',]
      },
      spacing: {
        0: '0',
        0.2: '1px',
        0.5: '4px',
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
        11: '88px',
        12: '96px',
        14: '112px',
        16: '120px',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
    },
  },
  plugins: [],
};
