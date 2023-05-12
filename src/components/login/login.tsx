import React from 'react';
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
  Stack,
} from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginForm from './loginForm';
import LoginContent from './loginContent';

export default function Login() {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        height={'100%'}
        padding={0}
      >
        <Grid item xs={6} alignItems={'center'} height={'100%'}>
          <LoginContent />
        </Grid>
        <Grid item xs={6} alignItems={'center'} height={'100%'}>
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
}
