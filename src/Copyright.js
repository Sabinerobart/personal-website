import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '../mui-imports';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 90,
    left: -75,
    transform: 'rotate(90deg)',
    fontFamily: 'Ovo'
  },
}));

export default function Copyright({ name }) {
  const classes = useStyles();
  return (
    <Typography variant="caption" color="textSecondary" align="center" className={classes.root}>
      {'Copyright © '}
      {name}
      {', '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
