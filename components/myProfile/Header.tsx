import React, { FunctionComponent, useState } from "react";
import { Typography, MenuIcon } from "../Typography";
import { Box, Avatar, Drawer, ListItem, List, Divider } from "../Grid";
import { Button } from '../Button'
import { makeStyles } from "@mui/styles";
import { assetPrefix } from "../../next.config";

const useStyles = makeStyles({
  avatar: {
    cursor: "pointer",
    color: "white",
  },

  menu: {
    cursor: "pointer",
    color: "white",
    '&:hover': {
      cursor: 'pointer',
      color: '#ff4acf',
    },
  },
  activeMenu: {
    cursor: "pointer",
    color: "#ff4acf",
    '&:hover': {
      cursor: 'pointer',
      color: '#ff4acf',
    },
  },
  drawer: {
    backgroundColor: "#2e2e2d",
  },
  line: {
    color: 'white'
  }

});

interface HeaderProp {
  profileClick: () => void;
  projectScroll: () => void;
  experienceScroll: () => void;
  skillsScroll: () => void;
  frameworksScroll: () => void;
  toolsScroll: () => void;
}

type Anchor = 'right';

const Header: FunctionComponent<HeaderProp> = ({
  profileClick,
  projectScroll,
  experienceScroll,
  skillsScroll,
  frameworksScroll,
  toolsScroll,
}) => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(0)
  const menuList = [
    {
      name: "About me",
      onClick: () => {
        profileClick()
        setIsActive(0)
      },
    },
    {
      name: "Senior project",
      onClick: () => {
        projectScroll()
        setIsActive(1)
      },
    },
    {
      name: "Experience",
      onClick: () => {
        experienceScroll()
        setIsActive(2)
      },
    },
    {
      name: "Skills",
      onClick: () => {
        skillsScroll()
        setIsActive(3)
      },
    },
    {
      name: "Frameworks",
      onClick: () => {
        frameworksScroll()
        setIsActive(4)
      },
    },
    {
      name: "Tools",
      onClick: () => {
        toolsScroll()
        setIsActive(5)
      },
    },
  ];

  const [state, setState] = useState({ right: false });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.drawer}
    >
      <List>
        {menuList?.map((item, index) => (
          <>
            <Box key={index} display="flex" py={1} onClick={item.onClick} >
              <ListItem button >
                <Typography className={isActive === index ? classes.activeMenu : classes.menu}>{item?.name}</Typography>
              </ListItem>
            </Box>
            <Divider className={classes.line} />
          </>
        ))}
      </List>
    </Box>
  );
  return (
    <Box zIndex={40} position="sticky" top={0} bgcolor="#2e2e2d">
      <Box py={2} px={3} position="relative" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" >
        <Box className={classes.avatar} display="flex" onClick={profileClick}>
          <Avatar
            alt="Na"
            src={`${assetPrefix}/images/profile_na.jpg`}
            onClick={profileClick}
          />
          <Typography
            className={classes.avatar}
            variant="h5"
            ml={1}
            alignSelf="center"
          >
            Wipapun Techasawong
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
          {menuList?.map((item, index) => (
            <Box mx={1} key={index} onClick={item?.onClick} className={isActive === index ? classes.activeMenu : classes.menu} >
              <Typography variant="h5" className={isActive === index ? classes.activeMenu : classes.menu}>
                {item?.name}
              </Typography>

            </Box>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }} >
          {(['right'] as const).map((anchor) => (
            <React.Fragment key={anchor} >
              <Button onClick={toggleDrawer(anchor, true)}><MenuIcon fontSize="large" className={classes.avatar} /></Button>
              <Drawer
                sx={{
                  [`& .MuiDrawer-paper`]: {
                    backgroundColor: "#2e2e2d"
                  },
                }}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
