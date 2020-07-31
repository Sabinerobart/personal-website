import React from 'react';
import { Container, Button, Grid, Box } from '../mui-imports';

import Link from '../src/Link';
import styles from './styles.js';

export default function Index() {
  const classes = styles();
  return (
    <Container
      maxWidth="lg">

      <Button
        variant="contained"
        color="secondary"
        component={Link}
        naked
        href="/contact"
        className={classes.homepageButton}
      >
        Contact
      </Button>
      <Grid
        container
        direction="column"
        justify="flex-end"
        className={classes.root}
      >
        <div className={classes.resultCard}></div>
        <Box className={classes.inputBox}>
          <input type="textarea" className={classes.input} placeholder="Quelles compétences recherchez-vous ?" />
        </Box>
      </Grid>
    </Container>
  );
}
