import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

export async function loginMock(data: { password: string }) {
  // Simulate a delay to mimic the network request
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { password } = data;

  if (password === 'p@s$w0rd') {
    return { message: 'Login successful' };
  } else {
    throw new Error('Invalid password');
  }
}

export default function LoginForm() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(loginMock, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
      setSnackbarMessage(data.message);
      setSnackbarOpen(true);
    },
    onError: (error: Error) => {
      setSnackbarMessage(error.message);
      setSnackbarOpen(true);
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = state;

    const emailError =
      email.trim() === ''
        ? 'Email is required'
        : !isValidEmail(email)
        ? 'Invalid email address'
        : '';
    const passwordError = password.trim() === '' ? 'Password is required' : '';

    setEmailError(emailError);
    setPasswordError(passwordError);
    setSubmitClicked(true);

    if (emailError || passwordError) {
      return;
    }

    try {
      const data = {
        email,
        password,
      };

      await mutate(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSnackbarMessage(error.message);
        setSnackbarOpen(true);
      }
    }
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage('');
  };

  return (
    <Box
      data-testid="login-form"
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
      }}
      className="login-form-content"
      padding={{ xs: '1rem', md: '3rem' }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Box sx={{ maxWidth: 600, margin: 'auto' }}>
            <h1
              style={{ marginBottom: 0, color: '#2663a4', textAlign: 'left' }}
              className="form-title"
            >
              Welcome back
            </h1>
            <h2 className="subtitle">Sign in to continue</h2>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={2}
            sx={{ borderRadius: 1.75 }}
            className="login-form"
          >
            <form onSubmit={handleSubmit}>
              <Grid spacing={0} container>
                <Grid item xs={12} marginBottom={3}>
                  <FormControl
                    sx={{ width: '100%' }}
                    variant="outlined"
                    error={submitClicked && !!emailError}
                  >
                    <InputLabel htmlFor="outlined-adornment-email" size="small">
                      Email
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-email"
                      type="email"
                      label="Email"
                      value={state.email}
                      size="small"
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start"></InputAdornment>
                        ),
                      }}
                      onChange={(e) =>
                        setState({ ...state, email: e.target.value })
                      }
                    />
                    {submitClicked && emailError && (
                      <FormHelperText>{emailError}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} marginBottom={1} sx={{ paddingBottom: 0 }}>
                  <FormControl
                    sx={{ width: '100%' }}
                    variant="outlined"
                    error={submitClicked && !!passwordError}
                  >
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      size="small"
                    >
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={state.password}
                      size="small"
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start">kg</InputAdornment>
                        ),
                      }}
                      onChange={(e) =>
                        setState({ ...state, password: e.target.value })
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                    {submitClicked && passwordError && (
                      <FormHelperText>{passwordError}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ paddingTop: 0 }}
                  marginBottom={{ xs: 1.5, md: 3 }}
                >
                  <Typography
                    component={Link}
                    href="#"
                    sx={{
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                    className="btn-forgot-password"
                  >
                    Forgot password?
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <p className="text-new-user">
                    New user?
                    <Typography
                      component={Link}
                      href="#"
                      sx={{
                        marginLeft: 0.8,
                        textDecoration: 'none',
                        cursor: 'pointer',
                      }}
                      className="text-new-user"
                    >
                      Create Account
                    </Typography>
                  </p>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    size="small"
                    sx={{
                      textTransform: 'none',
                      width: '100%',
                      padding: '.5rem',
                    }}
                    className="btn-login"
                    type="submit"
                    disabled={isLoading}
                    variant="contained"
                  >
                    {isLoading ? 'Logging in...' : 'Sign in'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Box>
  );
}
