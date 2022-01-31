import React, { FunctionComponent } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "../../../components/Button";
import { Typography } from "../../../components/Typography";
import { Box, Grid, Avatar } from "../../../components/Grid";
import { makeStyles } from "@mui/styles";
import { Navbar, Container, Nav } from "react-bootstrap";
const useStyles = makeStyles({
  avatar: {
    cursor: "pointer",
  },
  menu: {
    cursor: "pointer",
  },
});

interface HeaderProp {
  profileClick: () => void;
  projectScroll: () => void;
  experienceScroll: () => void;
  skillsScroll: () => void;
  frameworksScroll: () => void;
  toolsScroll: () => void;
}
const Header: FunctionComponent<HeaderProp> = ({
  profileClick,
  projectScroll,
  experienceScroll,
  skillsScroll,
  frameworksScroll,
  toolsScroll,
}) => {
  const classes = useStyles();

  const menuList = [
    {
      name: "About me",
      onClick: profileClick,
    },
    {
      name: "Senior project",
      onClick: projectScroll,
    },
    {
      name: "Experience",
      onClick: experienceScroll,
    },
    {
      name: "Skills",
      onClick: skillsScroll,
    },
    {
      name: "Frameworks",
      onClick: frameworksScroll,
    },
    {
      name: "Tools",
      onClick: toolsScroll,
    },
  ];
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand onClick={profileClick}>
          <Box display="flex" className={classes.avatar}>
            <Avatar
              alt="Na"
              src="/images/profile_na.jpg"
              onClick={profileClick}
            />
            <Typography
              className={classes.avatar}
              variant="body1"
              ml={1}
              alignSelf="center"
            >
              Wipapun Techasawong
            </Typography>
          </Box>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuList?.map((item, index) => (
              <Nav.Link key={index} onClick={item?.onClick}>
                {item?.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
