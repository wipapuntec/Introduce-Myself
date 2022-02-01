import { Box, Card, CardContent, Grid, Divider } from "../Grid";
import { Typography, ProjectIcon } from "../Typography";
import { YoutubeLayout } from "../layout";
import { makeStyles } from "@mui/styles";
import { FunctionComponent } from "react";
import Image from "next/image";

const useStyles = makeStyles({
  content: {
    background: `url("/images/bg4.jpg")`,
    backgroundSize: "cover",
  },
  icon: {
    marginRight: 7,
    fontSize: 35,
  },
  paragraph: {
    textIndent: "4%",
  },
  image: {
    marginRight: 3,
    borderRadius: "20%",
  },
});

const Project: FunctionComponent = () => {
  const classes = useStyles();
  const dataList = [
    {
      title: "Frameworks",
      description: "Vue.js & React-Native",
    },
    {
      title: "UI Framework",
      description: "Vuetify",
    },
    {
      title: "Technology",
      description: "Chirp.io(Ultrasonic wave)",
      image: "/images/chrip.png",
    },
    {
      title: "Tools",
      description: "Visual Studio Code, Github, Adobe XD, Animaker",
    },
  ];
  return (
    <Grid container px={5} py={9} className={classes.content}>
      <Grid item xs={12} md={7}>
        <Card
          sx={{
            "& .MuiTimelineItem-missingOppositeContent:before": {
              display: "none",
            },
          }}
        >
          <CardContent>
            <Typography variant="h3" sx={{ color: "text.secondary" }} my={1}>
              Senior project <Typography variant="body1">(2019)</Typography>
            </Typography>
            <Divider />

            <Box pl={1}>
              <Box my={2}>
                <Typography variant="body1" className={classes.paragraph}>
                  Application for checking student names via ultrasonic waves.
                  You can use web application to send signals. Students use the
                  mobile application (Android) to receive signals to check name
                  and see their history. In addition, teachers can use the web
                  application to manage their own timetable and can view the
                  student history as well.
                </Typography>
              </Box>

              {dataList?.map((item, index) => (
                <Box key={index}>
                  <Typography variant="caption">
                    - {item?.title} :{" "}
                    {item?.image && (
                      <Image
                        src={item.image}
                        width={30}
                        height={30}
                        alt="info"
                        className={classes.image}
                      />
                    )}
                    {item?.description}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box pl={2} display="flex">
              <a
                target="_blank"
                href="https://seniorproject.sit.kmutt.ac.th/showproject/IT59-BU27"
                rel="noopener noreferrer"
              >
                <button className="buttonLink">
                  CLICK ME <ProjectIcon className={classes.icon} />
                </button>
              </a>
              <Box alignSelf="center" display={{ xs: "none", md: "block" }}>
                <Image
                  alt="point"
                  src="/icons/point.gif"
                  width={50}
                  height={50}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={5}>
        <YoutubeLayout embedId="PPzKdyPbkyY" />
      </Grid>
    </Grid>
  );
};

export default Project;
