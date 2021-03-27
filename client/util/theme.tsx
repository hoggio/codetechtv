import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1771E6',
    },
    secondary: {
      main: '#FFF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'whitesmoke',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
      },
    },
  },
});

export default theme;
