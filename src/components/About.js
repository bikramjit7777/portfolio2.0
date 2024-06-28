import React from "react";
import { Container, Typography } from "@material-ui/core";

function About() {
  return (
    <Container>
      <Typography component="h1">About Me</Typography>
      <Typography variant="body1" component="p">
        I have 3.5+ years of professional experience as a Software Developer,
        specializing in ReactJS, NodeJS, JavaScript, TypeScript,and
        PostgreSQL.Throughout my career, I have utilized various tools and
        technologies, including Git, Jira, React-Redux, Redux-Saga, Postman,
        DBeaver, VS Code, GitHub, CircleCI, and DataDog, to enhance development
        processes and ensure high-quality software delivery.
      </Typography>
      <Typography variant="body1" component="p">
        I have completed a Post-Graduation Diploma in Web Design and Development
        from Conestoga College, Kitchener, Canada. Prior to this, I earned a
        Bachelor's degree in Computer Science & Engineeringin 2019. Throughout
        my academic journey and professional career, I have immersed myself in
        various trending web technologies, gaining valuable hands-on experience
        and expanding my expertise in the field.
      </Typography>
    </Container>
  );
}

export default About;
