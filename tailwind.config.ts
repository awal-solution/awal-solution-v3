import flowbite from 'flowbite-react/tailwind';
import {
  animation,
  boxShadow,
  keyframes,
  gradiants,
} from './src/theme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
     extend: {
      animation: animation,
      keyframes: keyframes,
      boxShadow: boxShadow,
      backgroundImage: gradiants,
    },
  },
  plugins: [flowbite.plugin()],
};
