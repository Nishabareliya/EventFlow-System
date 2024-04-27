import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import "../Register/register.css"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {''}
      <Link color="inherit" href="https://www.linkedin.com/in/arjun-singh-904bb5225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
      
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function RegistrationForm() {
    const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 

 const handleLogin=()=>{
  navigate("/dashboard")
 }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { username, password });
      navigate('/dashboard')
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='fullBody'>
    <div className='mainBody'>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography onClick ={handleLogin} component="h1" variant="h5">
           Admin Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Admin Name"
                  label="Admin Name"
                  name="AdminName"
                  autoComplete="family-name"
                  onChange={(e) => setUsername(e.target.value)}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via username."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link onClick={handleLogin} variant="body2">
                  Already have an account? Sign in
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
    </div>
  );
}