import React, { FunctionComponent } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import LanguageIcon from "@mui/icons-material/Language";
import { Button, MenuButton } from "../../../components/Button";
import {
  Typography,
  EducationIcon,
  ExperienceIcon,
  SkillIcon,
  FrameworkIcon,
  ToolsIcon,
  ProjectIcon,
} from "../../../components/Typography";
import { Box, Grid } from "../../../components/Grid";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  icons: {
    color: "white",
  },
  layout: {
    clear: "both",
  },
});

const Content: FunctionComponent = () => {
  const classes = useStyles();

  const menuList = [
    {
      icon: <EducationIcon className={classes.icons} />,
      text: "About me",
      color: "#92A9BD",
      textColor: "#3F5669",
    },
    {
      icon: <ProjectIcon className={classes.icons} />,
      text: "Senior project",
      color: "#D3DEDC",
      textColor: "#60827D",
    },
    {
      icon: <ExperienceIcon className={classes.icons} />,
      text: "Experience",
      color: "#E8E3D8",
      textColor: "#867C65",
    },
    {
      icon: <SkillIcon className={classes.icons} />,
      text: "Skills",

      color: "#DFD3C3",
      textColor: "#605C52",
    },
    {
      icon: <FrameworkIcon className={classes.icons} />,
      text: "Frameworks",
      color: "#C1A3A3",
      textColor: "#694E4E",
    },
    {
      icon: <ToolsIcon className={classes.icons} />,
      text: "Tools",
      color: "#AEABBF",
      textColor: "#5C5A6C",
    },
  ];
  return (
    <Grid container spacing={2} px={5} pt={10} pb={2}>
      {menuList?.map((item) => {
        return (
          <Grid item xs={4} md={2} className={classes.layout}>
            <MenuButton
              icon={item.icon}
              text={item.text}
              color={item.color}
              textColor={item.textColor}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Content;
