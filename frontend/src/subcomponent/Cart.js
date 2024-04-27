import axios from "axios";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from "../component/navbar.js"
import Footer from "../component/footer.js"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const StyledCard = styled(Card)({
  minWidth: 275,
  marginBottom: 2,
  '& .MuiCardContent-root': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
    position: 'relative', // Add position relative to the CardContent
  },
});

function EventCard({ event }) {
  // Function to format date to display only the date part
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <Grid item xs={6}>
      <StyledCard>
        <CardContent>
          {/* Date displayed at the top right */}
          <Typography variant="body2" sx={{ position: 'absolute', top: 0, right: 0 }}>
          <strong>Start Date:</strong>   {formatDate(event.startdate)}
          </Typography>

        
          <Typography variant="h5" component="div" sx={{ color: 'Blue', fontSize: '1.5rem', borderBottom:"2px solid red", textAlign: 'left' }}>
            {event.fullname}
          </Typography>
         
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '1rem', textAlign: 'left' }}>
            <strong>Event Type:</strong> {event.eventtype}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '1rem', textAlign: 'left' }}>
            <strong>Venue:</strong> {event.venue}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '1rem', textAlign: 'left' }}>
            <strong>Guest Number:</strong> {event.guestnumber}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '1rem', textAlign: 'left' }}>
            <strong>Decoration:</strong> {event.decoration}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '1rem', textAlign: 'left' }}>
            <strong>Additional:</strong> {event.additional}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '1rem', textAlign: 'left' }}>
            <strong>Place:</strong> {event.place}
          </Typography>
          {/* End date displayed next to start date */}
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '1rem', textAlign: 'left' }}>
            <strong>End Date:</strong> {formatDate(event.enddate)}
          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getBooking')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
          <Grid container spacing={3}>
            {events.map(event => (
              <EventCard key={event._id} event={event} />
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
}
