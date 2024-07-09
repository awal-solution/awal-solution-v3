export const boxShadow = {
  cs: '20px 20px 60px , -20px -20px 60px',
  card: '0 4px 23px 0 rgba(174, 191, 210, 0.3)',
  icon: '0 4px 23px 0 rgba(174, 191, 210, 0.3);',
};

export const animation = {
  spinCW: 'spinCW 10s linear infinite',
  spinAntiCW: 'spinAntiCW 10s linear infinite',
  ripple: 'ripple-effect 0.6s linear',
};

export const keyframes = {
  spinCW: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  spinAntiCW: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(-360deg)' },
  },
  'ripple-effect': {
    '0%': { transform: 'scale(0)', opacity: 1 },
    '90%': { transform: 'scale(4)', opacity: 0 },
    '100%': { transform: 'scale(0)', opacity: 0 },
  },
};

export const gradiants = {
  'list-gradient': 'linear-gradient(90deg, transparent, #E3F0FF)',
};
