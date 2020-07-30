import React from 'react';
import Head from 'next/head';

import { Container, Typography, Box, Button } from '../mui-imports';
import Link from '../src/Link';

export default function About() {
  const title = "[Zb]+about";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
          <Button variant="contained" color="primary" component={Link} naked href="/">
            Go to the main page
        </Button>
        </Box>
      </Container>
    </>
  );
}
