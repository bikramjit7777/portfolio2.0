import React from "react";
import { Container, Typography } from "@material-ui/core";

function About() {
  return (
    <Container>
      <Typography variant="h3" component="h1">
        About Me
      </Typography>
      <Typography variant="body1" component="p">
        I have 3.5+ years of professional experience as a Software Developer,
        specializing in ReactJS, NodeJS, JavaScript, TypeScript,and
        PostgreSQL.Throughout my career, I have utilized various tools and
        technologies, including Git, Jira, React-Redux, Redux-Saga, Postman,
        DBeaver, VS Code, GitHub, CircleCI, and DataDog, to enhance development
        processes and ensure high-quality software delivery.
      </Typography>
    </Container>
  );
}

export default About;
