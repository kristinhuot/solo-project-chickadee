import React from 'react';
import { Container, Typography, Paper, Box, CardMedia, List, ListItem } from '@mui/material';

// This is a simple component. It doesn't have local state, dispatch
// any redux actions or display any part of redux state

function AboutPage() {
  return (
    <Container>
      <Paper sx={{bgcolor:'#717D92', height:'50'}}>
          <Typography fontSize={40} variant="h2" textAlign="center">Our Origin Story</Typography>
        </Paper>
      <Paper>  
      <Container>
        <Typography gap={4} p={2} m={3}>Chickadee is an ‘un-social media’ web application - its goal is to foster intentionality and support users in the deepening of close-connections outside of the app, in real-life. In an ever global, fast-paced, and disconnected world, Chickadee is a place to share in the unique life events that matter most to you - so that you and your closest connections can celebrate one another, and what matters to each of you, in the most impactful way.</Typography>
      </Container>
      <Container>
        <Typography gap={4} p={2} m={3}>Technologies used:
          <List>
            <ListItem>React</ListItem> 
            <ListItem>Redux</ListItem>  
            <ListItem>Sagas</ListItem>  
            <ListItem>Node</ListItem>  
            <ListItem>Express</ListItem>  
            <ListItem>Postgresql</ListItem>   
            <ListItem>MUI</ListItem>    
          </List> 
      </Typography>
      </Container>
      <Container>
        <Typography gap={4} p={2} m={3}>Future Additions: Calendar integration to remind flockmates of upcoming flights</Typography>
      </Container>
      <Container>
        <Typography gap={4} p={2} m={3} sx={{}}>Chickadees are small songbirds that form complex social hierarchies and maintain strong friendships within their flock. Their distinctive call is often used to keep the flock together. Similarly, the Chickadee app is intended to keep connections close, no matter how far away they may be from the people that matter most to them.</Typography>
      </Container>
      </Paper>
      <Box display="flex" justifyContent="center" alignItems="center" my={4}>
        <CardMedia
          component="img"
          image="/favicon.ico"
          alt="Songbird on a branch"
          sx={{ maxWidth: '300px' }}
        />
      </Box>
    </Container>
  );
}

export default AboutPage;
