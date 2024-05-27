import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

// This is a simple component. It doesn't have local state, dispatch
// any redux actions or display any part of redux state

function AboutPage() {
  return (
    <Container>
      <Paper sx={{bgcolor:'#B18C9E', height:'50'}}>
          <Typography fontSize={40} variant="h2" textAlign="center">Our Origin Story</Typography>
        </Paper>
      <Container>
        <Typography gap={4} p={2} m={3}>Chickadee is an ‘un-social media’ web application - its goal is to foster intentionality and support users in the deepening of close-connections outside of the app, in real-life. In an ever global, fast-paced, and disconnected world, Chickadee is a place to share in the unique life events that matter most to you - so that you and your closest connections can celebrate one another, and what matters to each of you, in the most impactful way.</Typography>
      </Container>
      <Container>
        <Typography gap={4} p={2} m={3}>Users create a profile, indicating the ways in which they most prefer to receive care from their closest connections. Users add life events, or flights, that are most meaningful to them, then share them with their connections, known as their flock. Users are reminded of their flock’s upcoming flights, with prompts to encourage action outside of the web app itself</Typography>
      </Container>
      <Container>
        <Typography gap={4} p={2} m={3}>Chickadees are small songbirds that form complex social hierarchies and maintain strong friendships within their flock. Their distinctive call is often used to keep the flock together. Similarly, the Chickadee app is intended to keep connections close, no matter how far away they may be from the people that matter most to them.</Typography>
      </Container>
    </Container>
  );
}

export default AboutPage;
