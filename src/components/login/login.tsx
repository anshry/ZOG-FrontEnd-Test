import { Grid } from '@mui/material';
import LoginForm from './LoginForm';
import LoginContent from './LoginContent';

export default function Login() {
  return (
    <Grid
      container
      alignItems={'stretch'}
      justifyContent={'center'}
      height={'100vh'}
      padding={0}
    >
      <Grid item xs={12} md={6}>
        <LoginContent />
      </Grid>
      <Grid item xs={12} md={6} sx={{ flexGrow: 1 }}>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
