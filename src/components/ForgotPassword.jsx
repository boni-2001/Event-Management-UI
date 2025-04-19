import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Paper
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';

const redOrange = '#FF5555';
const gradientBg = 'linear-gradient(to bottom right, #FFE1E1,#FFC8C8,#FF8080)';
const loginGradient = 'linear-gradient(to bottom, #FFF5F5, #FFDEDE)';

const ForgotPassword = () => {
  return (
    <Box sx={{
      py: 5,
      minHeight: '100vh',
      background: loginGradient,
      fontFamily: 'Poppins, sans-serif',
    }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper
            elevation={3}
            sx={{
              p: 5,
              borderRadius: 5,
              background: gradientBg,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              align="center"
              gutterBottom
              sx={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Forgot Password
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              mb={3}
              className="term"
              sx={{ fontSize: '14px !important' }}
            >
              Enter the email address associated with your account.
            </Typography>

            <Box component="form">
              <Typography mb={1} sx={{ fontFamily: 'Poppins, sans-serif' }}>
                Email Address
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: redOrange }} />
                    </InputAdornment>
                  ),
                }}
              />

              <FormControlLabel
                sx={{ mt: 2 }}
                control={<Checkbox sx={{ color: redOrange }} />}
                label={
                  <Typography sx={{ fontSize: '14px !important' }}>
                    I've read and agree with Terms of Service & Our Privacy Policy
                  </Typography>
                }
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  py: 1.5,
                  backgroundColor: redOrange,
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#e24d4d',
                  },
                }}
              >
                Continue
              </Button>

              <Typography align="center" sx={{ my: 2 }}>
                Or
              </Typography>

              <Button
                fullWidth
                variant="outlined"
                // startIcon={<GoogleIcon />}
                startIcon={
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google logo" height="23" />
                  }
                sx={{ py: 1.5, fontSize: '15px !important' }}
              >
                Login with Google
              </Button>

              <Typography align="center" mt={3}>
                Return to{' '}
                <Link href="/login" underline="hover">
                  Login
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgotPassword;
