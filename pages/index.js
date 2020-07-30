import React from 'react';
import { Container, Button, Grid } from '../mui-imports';

import Link from '../src/Link';
import styles from './styles.js';

export default function Index() {
  const classes = styles();
  return (
    <Container
      maxWidth="md">
      <Grid
        container
        direction="column"
        justify="space-between"
        className={classes.root}
      >
        <div>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            naked
            href="/contact"
            className={classes.homepageButton}
          >
            Contact Me
          </Button>
        </div>
        <input />
      </Grid>
    </Container>
  );
}
