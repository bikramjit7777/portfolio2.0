import React from 'react';
import { Container, Typography } from '@material-ui/core';

function About() {
  return (
    <Container>
      <Typography variant="h3" component="h1">
        About Me
      </Typography>
      <Typography variant="body1" component="p">
        I'm a software developer with a passion for creating beautiful and functional web applications. With a strong background in React, JavaScript, and modern web technologies, I build responsive and user-friendly websites.
      </Typography>
    </Container>
  );
}

export default About;
