import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2150E5',
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
});

export default theme;
