import React from "react";

import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
    Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
    return (
        <Box className="login" sx={{
            py: 8,
            minHeight: "100vh",
            background: "linear-gradient(to top, #FFF5F5, #FFDEDE)",
        }}>
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{
                    p: 5,
                    borderRadius: 5,
                    background: "linear-gradient(to bottom right, #FFE1E1,#FFC8C8,#FF8080)",
                }}>
                    <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
                        Login
                    </Typography>
                    <Typography variant="body2" align="center" color="text.secondary" mb={3} sx={{ fontSize: 14 }}>
                        Welcome back! Please login to your account.
                    </Typography>

                    <Box component="form">
                        <TextField
                            label="Email Address"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            placeholder="Enter your email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon sx={{ color: "#FF5555" }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            placeholder="Password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Grid container alignItems="center" justifyContent="space-between" mt={1}>
                            <Grid item>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Remember Me"
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" component="a" href="#" sx={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Forgot Password
                                </Typography>
                            </Grid>
                        </Grid>

                        <Button
                            variant="contained"
                            color="error"
                            fullWidth

                            sx={{
                                mt: 3,
                                py: 1.5,
                                borderRadius: 2,
                                backgroundColor: "#FF5555",
                                color: "#fff",
                                fontWeight: 600,
                                "&:hover": {
                                    backgroundColor: "#e14e4e",
                                },
                            }}
                        >
                            Login
                        </Button>

                        <Divider sx={{ my: 3 }}>Or</Divider>

                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={
                                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google logo" height="23" />
                              }
                            sx={{ py: 1.5, borderRadius: 2 }}
                        >
                            Login with Google
                        </Button>

                        <Typography align="center" mt={3}>
                            Don't have an account?{" "}
                            <Typography component="a" href="#" sx={{ fontFamily: "'Poppins', sans-serif" }}>
                                Sign Up
                            </Typography>
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Login;
