import {
  Box,
  Card,
  CardContent,
  Grid,
  Divider,
} from "../../../components/Grid";
import {
  Typography,
  EducationIcon,
  MailIcon,
  BirthDayIcon,
  PhoneIcon,
  LocationIcon,
} from "../../../components/Typography";
import { makeStyles } from "@mui/styles";
import { FunctionComponent } from "react";

const useStyles = makeStyles({
  content: {
    background: `url("/images/bg6.jpg")`,
    backgroundSize: "cover",
  },
  icon: {
    marginRight: 7,
    fontSize: 30,
  },
});

const AboutMe: FunctionComponent = () => {
  const classes = useStyles();

  const infoLayout = [
    {
      icon: <BirthDayIcon className={classes.icon} />,
      description: "06 May 1998",
    },
    {
      icon: <PhoneIcon className={classes.icon} />,
      description: "098-827-3990",
    },
    {
      icon: <MailIcon className={classes.icon} />,
      description: "wipapuntec@gmail.com",
    },
    {
      icon: <LocationIcon className={classes.icon} />,
      description:
        "254/259 Bangkok horizon P48. Phet Kasem Road, Bang Wa, Phasi Charoen, Bangkok 10160",
    },
  ];
  return (
    <Grid container px={5} py={2} className={classes.content}>
      <Grid item md={4} display={{ xs: "none", md: "block" }}>
        <Box px={3} textAlign="center">
          <img src="images/profile_na2.jpg" className="myProfile" />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            "& .MuiTimelineItem-missingOppositeContent:before": {
              display: "none",
            },
          }}
        >
          <CardContent>
            <Typography variant="h2" sx={{ color: "text.secondary" }} my={1}>
              Miss Wipapun Techasawong(Na)
            </Typography>
            <Typography variant="h3" sx={{ color: "text.secondary" }} my={1}>
              Software Developer
            </Typography>

            <Divider />

            {infoLayout?.map((item, index) => (
              <Box my={2} key={index}>
                <Box mb={1}>
                  <Typography variant="body1">
                    {item?.icon}: {item?.description}
                  </Typography>
                </Box>
              </Box>
            ))}

            <Box mt={2}>
              <Box>
                <Typography variant="body1">
                  <EducationIcon className={classes.icon} />: King Mongkut's
                  University of Technology Thonburi
                </Typography>
              </Box>
            </Box>
            <Box pl="45px">
              <Typography variant="caption">
                Bachelor of Science in Information Technology (GPAX : 3.15)
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
