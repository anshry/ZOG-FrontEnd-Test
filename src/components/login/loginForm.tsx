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
        padding: '3rem',
        backgroundColor: '#f6f9fb',
        height: '100%',
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Box sx={{ maxWidth: 600, margin: 'auto' }}>
            <h1
              style={{ marginBottom: 0, color: '#2663a4', fontSize: '2.5rem' }}
            >
              Welcome back
            </h1>
            <h2
              style={{
                marginBottom: 36,
                marginTop: 8,
                fontSize: 22,
                color: '#66758a',
              }}
            >
              Sign in to continue
            </h2>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={2}
            sx={{ padding: 4, borderRadius: 3, maxWidth: 600, margin: 'auto' }}
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
                    <InputLabel htmlFor="outlined-adornment-password">
                      Email
                    </InputLabel>
                    <OutlinedInput
                      id="outlined"
                      type="email"
                      label="Email"
                      value={state.Email}
                      onChange={(e) =>
                        setState({ ...state, Email: e.target.value })
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} marginBottom={1} sx={{ paddingBottom: 0 }}>
                  <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={state.Password}
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
                <Grid item xs={12} sx={{ paddingTop: 0, marginBottom: 3 }}>
                  <Button
                    sx={{
                      padding: 0,
                      fontSize: '14px',
                      textTransform: 'none',
                    }}
                  >
                    Forgot password?
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <p style={{ fontSize: '14px' }}>
                    New user?
                    <Button
                      sx={{
                        marginLeft: 0.8,
                        padding: 0,
                        fontSize: '14px',
                        textTransform: 'none',
                      }}
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
