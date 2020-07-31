import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => ({
  root: {
    height: '100vh',
    padding: '2rem 0'
  },
  homepageButton: {
    position: 'absolute',
    top: "1.3rem",
    right: "1.3rem",
    transform: 'rotate(90deg)',
    height: '5rem',
    width: '5rem',
    borderRadius: 0,
    fontFamily: "Tommy-Black",
    textAlign: "center",
    '& span': {
      transform: 'rotate(-45deg)'
    }
  },
  inputBox: {
    margin: '0 calc(1rem + 1vw)'
  },
  input: {
    border: 'none',
    // height: '30vh',
    fontSize: 'calc(4rem + 5vw)',
    width: '100%',
    background: 'transparent',
    '&:focus': {
      outline: 'none',
    }
  },
  resultCard: {
    background: theme.palette.secondary.main,
    height: '50vh',
    width: '50vw',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(-60%, -50%)',
    transition: '.3s',
    boxShadow: '0 2.8px 4.2px rgba(0, 0, 0, 0.3),0 6.7px 6.3px rgba(0, 0, 0, 0.048),0 22.3px 17.9px rgba(0, 0, 0, 0.072)',
  }
}));
