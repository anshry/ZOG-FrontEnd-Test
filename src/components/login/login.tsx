import { Grid } from '@mui/material';
import LoginForm from './loginForm';
import LoginContent from './loginContent';

export default function Login() {
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
      height={{ md: '100vh', xs: '100%' }}
      minHeight={{ xs: '100vh', md: 'unset' }}
      padding={0}
      direction={{ xs: 'column', md: 'row' }}
    >
      <Grid item xs={12} md={6} alignItems={'center'} height={'100%'}>
        <LoginContent />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        alignItems={'center'}
        height={'100%'}
        sx={{ flexGrow: 1 }}
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
}
