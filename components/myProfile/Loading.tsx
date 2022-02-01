import React, { FunctionComponent } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "../Typography";
import { Grid, Box } from "../Grid";

const useStyles = makeStyles({
  bgContent: {
    background: "rgba(76, 175, 80, 0.3)",
  },
});

const LoadingScreen: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className="animationBg">
      <Grid container className={classes.bgContent} textAlign="center">
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
