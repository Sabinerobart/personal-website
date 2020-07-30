import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#726AB0',
    },
    secondary: {
      main: '#862c83',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fafafa',
    }
  },
  typography: {
    caption: {
      fontSize: '0.65rem'
    }
  }
});

export default theme;
