import { Box, Button, Grid } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

export default function LoginContent() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        backgroundColor: '#2663a4',
        height: '100%',
        position: 'relative',
      }}
      padding={{ xs: '1rem 1rem 5rem', md: '3rem' }}
    >
      <h5 className="brand">Envelope</h5>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} marginBottom={2}>
          <h1 className="content-title">
            Introducing our
            <br />
            2020 report
          </h1>
        </Grid>
        <Grid item xs={12} marginBottom={2}>
          <p className="top-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum cum
            soluta nisi officiis
          </p>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            endIcon={<OpenInNew fontSize="small" />}
            className="btn-small"
            sx={{
              textTransform: 'none',
              color: 'white',
              borderColor: 'white',
            }}
          >
            View Report
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
