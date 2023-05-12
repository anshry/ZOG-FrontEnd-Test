import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from '@mui/material';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

type Props = {};

export default function LoginForm({}: Props) {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (data: any) => fetch('/api/login', { method: 'POST', body: data }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );
  const [showPassword, setShowPassword] = React.useState(false);
  const [state, setState] = React.useState({ Email: '', Password: '' });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
      }}
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                mutate(data);
              }}
            >
              <Grid spacing={0} container>
                <Grid item xs={12} marginBottom={3}>
                  <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      size="small"
                    >
                      Email
                    </InputLabel>
                    <OutlinedInput
                      id="outlined"
                      type="email"
                      label="Email"
                      value={state.Email}
                      size="small"
                      onChange={(e) =>
                        setState({ ...state, Email: e.target.value })
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} marginBottom={1} sx={{ paddingBottom: 0 }}>
                  <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel
                      htmlFor="outlined-adornment-password"
                      size="small"
                    >
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={state.Password}
                      size="small"
                      onChange={(e) =>
                        setState({ ...state, Password: e.target.value })
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
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ paddingTop: 0 }}
                  marginBottom={{ xs: 1.5, md: 3 }}
                >
                  <Button
                    sx={{
                      textTransform: 'none',
                    }}
                    className="btn-forgot-password"
                  >
                    Forgot password?
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <p className="text-new-user">
                    New user?
                    <Button
                      sx={{
                        marginLeft: 0.8,
                        padding: 0,
                        textTransform: 'none',
                      }}
                      className="text-new-user"
                    >
                      Create Account
                    </Button>
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
                    className="btn-small"
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
    </Box>
  );
}
