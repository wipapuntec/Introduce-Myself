import { Box, Card, CardContent, Grid, Divider } from "../Grid";
import {
  Typography,
  EducationIcon,
  MailIcon,
  BirthDayIcon,
  PhoneIcon,
  LocationIcon,
} from "../Typography";
import { makeStyles } from "@mui/styles";
import { FunctionComponent } from "react";
import { assetPrefix } from "../../next.config";

const useStyles = makeStyles({
  content: {
    background: `url("${assetPrefix}/images/bg6.jpg")`,
    backgroundSize: "cover",
  },
  icon: {
    marginRight: 7,
    fontSize: 30,
  },
  image: {
    borderRadius: 5,
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
    {
      icon: <EducationIcon className={classes.icon} />,
      description: "King Mongkut's University of Technology Thonburi",
      sub_description:
        "Bachelor of Science in Information Technology (GPAX : 3.15)",
    },
  ];
  return (
    <Grid container px={5} py={2} className={classes.content}>
      <Grid item md={4} display={{ xs: "none", md: "block" }}>
        <Box px={3} display="flex" height="100%" justifyContent="center">
          <img
            src={`${assetPrefix}/images/profile_na2.jpg`}
            alt="profile"
            className={classes.image}
            width={280}
            height="100%"
          />
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
              <>
                {item?.sub_description ? (
                  <>
                    <Box mt={2}>
                      <Box>
                        <Typography variant="body1">
                          {item?.icon}: {item?.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Box pl="45px">
                      <Typography variant="caption">
                        {item?.sub_description}
                      </Typography>
                    </Box>
                  </>
                ) : (
                  <Box my={2} key={index}>
                    <Box mb={1}>
                      <Typography variant="body1">
                        {item?.icon}: {item?.description}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
