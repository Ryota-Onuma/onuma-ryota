import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0B2025',
    },
    monotone: {
      white: 'white',
      white40: 'rgba(255, 255, 255, 0.4)',
      black: 'black',
      black50: 'rgba(0, 0,0, 0.5)',
    },
    fontColor: {
      main: '#fddd00',
    },
    buttonColor: {
      main: '#037D9C',
    },
    tagContainerBorderColor: {
      main: '#084555',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    monotone: {
      white: string;
      white40: string;
      black: string;
      black50: string;
    };
    fontColor: {
      main: string;
    };
    buttonColor: {
      main: string;
    };
    tagContainerBorderColor: {
      main: string;
    };
  }
  interface PaletteOptions {
    monotone: {
      white: string;
      white40: string;
      black: string;
      black50: string;
    };
    fontColor: {
      main: string;
    };
    buttonColor: {
      main: string;
    };
    tagContainerBorderColor: {
      main: string;
    };
  }
}
