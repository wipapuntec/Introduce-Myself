import React, { FunctionComponent } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "../../../components/Button";
import { Typography } from "../../../components/Typography";
import { Box, Grid, Avatar } from "../../../components/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  avatar: {
    cursor: "pointer",
  },
});

interface HeaderProp {
  profileClick: () => void;
}
const Header: FunctionComponent<HeaderProp> = ({ profileClick }) => {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex", flex: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: (theme) => theme.palette.primary.light,
        }}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid
              item
              xs={10}
              md={10}
              justifyContent="flex-start"
              textAlign="left"
            >
              <Box display="flex">
                <Avatar
                  alt="Na"
                  src="/images/profile_na.jpg"
                  className={classes.avatar}
                  onClick={profileClick}
                />
                <Typography variant="body1" ml={1} alignSelf="center">
                  Wipapun Techasawong
                </Typography>
              </Box>
            </Grid>

            {/* <Grid
              item
              xs={2}
              md={2}
              justifyContent="flex-end"
              textAlign="right"
            >
              <Button color="primary">
                <LanguageIcon />
                <Typography variant="body1" ml={1}>
                  EN
                </Typography>
              </Button>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
