import React, { FunctionComponent } from "react";
import { Typography } from "../Typography";
import { Grid, Box } from "../Grid";

const LoadingScreen: FunctionComponent = () => {
  return (
    <Box className="animationBg">
      <Grid container textAlign="center">
        <Grid item xs={12}>
          <Typography variant="h1">WIPAPUN TECHASAWONG</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Welcome to my profile :)</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoadingScreen;
