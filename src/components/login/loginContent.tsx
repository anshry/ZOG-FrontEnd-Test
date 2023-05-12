import { Box, Button, Grid } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import React from 'react';

export default function LoginContent() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        padding: '3rem',
        backgroundColor: '#2663a4',
        height: '100%',
        position: 'relative',
      }}
    >
      <h5
        style={{
          color: 'white',
          position: 'absolute',
          top: '1.5rem',
          left: '3.5rem',
          fontSize: 22,
        }}
      >
        Envelope
      </h5>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} marginBottom={2}>
          <h1
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: '2.5rem',
              marginBottom: 6,
            }}
          >
            Introducing our
            <br />
            2020 report
          </h1>
        </Grid>
        <Grid item xs={12} marginBottom={2}>
          <p style={{ textAlign: 'center', color: 'white' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum cum
            soluta nisi officiis
          </p>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            endIcon={<OpenInNew fontSize="small" />}
            sx={{
              textTransform: 'none',
              color: 'white',
              borderColor: 'white',
              width: '55%',
              maxWidth: '60%',
            }}
          >
            View Report
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
