import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Signup = () => {
  return (
    <Box
      py={5}
      minHeight="100vh"
      sx={{
        background: 'linear-gradient(to top, #FFF5F5, #FFDEDE)', // login background
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            borderRadius: 5,
            p: 5,
            background: 'linear-gradient(to bottom right, #FFE1E1,#FFC8C8,#FF8080)', // fromBg background
          }}
        >
          <Typography
            variant="h5"
            align="center"
            fontWeight={600}
            mb={1}
            sx={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Signup
          </Typography>

          <Typography align="center" color="textSecondary" mb={4}>
            Welcome! Let's create your account.
          </Typography>

          {/* Step Indicator */}
          <Box display="flex" justifyContent="center" alignItems="center" gap={2} mb={3}>
            <Step number={1} label="Basic Information" active />
            <ArrowForwardIosIcon fontSize="small" />
            <Step number={2} label="Verification Code" />
            <ArrowForwardIosIcon fontSize="small" />
            <Step number={3} label="Personal Information" />
          </Box>

          <form>
            <Typography mb={1}>Email Address</Typography>
            <TextField
              fullWidth
              placeholder="Enter your email"
              type="email"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: '#FF5555' }} /> {/* input-group-text color */}
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              control={<Checkbox sx={{ color: '#FF5555' }} />}
              label={
                <Typography sx={{ fontSize: '14px' }}>
                  I've read and agree with Terms of Service & Our Privacy Policy
                </Typography>
              }
              sx={{ mt: 2 }}
            />

            <Box mt={3}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#FF5555', // btnColor background
                  color: '#fff',              // btnColor text
                  '&:hover': {
                    backgroundColor: '#e64444',
                  },
                }}
              >
                Continue
              </Button>
            </Box>

            <Typography align="center" my={2}>
              Or
            </Typography>

            <Button
              fullWidth
              variant="outlined"
              size="large"
              startIcon={
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google logo" height="23" />
              }
            >
              Login with Google
            </Button>

            <Typography align="center" mt={3} pb={2}>
              Already have an account?{' '}
              <Button variant="text" size="small" sx={{ fontSize: '15px' }}>
                Login
              </Button>
            </Typography>

            <Grid container>
              <Grid item xs={6}>
                <Typography color="textSecondary">Back</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography color="textSecondary">Next</Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

// Step component
const Step = ({ number, label, active }) => (
  <Box display="flex" alignItems="center" color={active ? 'error.main' : 'text.secondary'}>
    <Box
      border={1}
      borderColor="error.main"
      borderRadius="50%"
      width={24}
      height={24}
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="0.75rem"
      fontWeight="bold"
      mr={1}
    >
      {number}
    </Box>
    <Typography variant="body2" fontWeight={500}>
      {label}
    </Typography>
  </Box>
);

export default Signup;
