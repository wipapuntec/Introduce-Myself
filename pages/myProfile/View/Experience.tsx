import PropTypes from "prop-types";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot,
} from "@mui/lab";
import { CardLayout } from "../../../components/layout";
import { Box, Grid } from "../../../components/Grid";
import { Typography } from "../../../components/Typography";
import ImageZoomLayout from "../../../components/ImageZoom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imageGraph: {
    width: "10% !important",
    border: "10px solid red",
  },
});

const INTERNSHIPS = [
  {
    title: "G-ABLE",
    type: "g-able",
    time: "JUN 2019 – AUG 2019",
    descriptions: [
      "Extract data from a database and analyze it by presenting it in graphs.",
      "/images/graph1.jpg",
      "/images/graph2.png",
      "/images/graph3.png",
      "/images/graph4.jpg",
      "/images/graph5.jpg",
      "/images/graph6.jpg",
    ],
  },
];

const TIMELINES = [
  {
    title: "Bop Company Limited",
    type: "bop",
    time: "JUN 2020 - JULY 2021",
    descriptions: [
      "Developed a web application using React, Preact, Next.js, Material UI.",
      "Developed a mobile application using React Native.",
      "Ensure the technical feasibility of UI/UX designs.",
      "Check and validate all input entered into a system (Yup, Formik, React Hook Form).",
      "Handle Complex Control Flows in React-Redux Apps Using Redux-Saga.",
      "Collaborate with other team members and stakeholders.",
      "Implement responsive design.",
    ],
  },
  {
    title: "Hive Ventures",
    type: "hive",
    time: "JULY 2021 - Present",
    descriptions: [
      "Developed a web application using React, Next.js, Material UI, Ant Design.",
      "Developed a mobile application using React Native.",
      "Agile Methodology.",
      "Plan, execute projects according to predetermined timelines.",
      "Build reusable code.",
      "Using React Query helps to access data from API.",
    ],
  },
];

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool,
};

function OrderItem({ item, isLast }) {
  const { type, title, time, descriptions } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === "bop" && "info.main") ||
              (type === "hive" && "success.main"),
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          ({time})
        </Typography>

        <Grid container spacing={2}>
          {descriptions?.map((item, index) => (
            <>
              {item?.includes("/images/") ? (
                <Grid item xs={12} md={4} key={index} mt={1} px={2}>
                  <ImageZoomLayout
                    image={item}
                    zoomImage={item}
                    className="zoomImage"
                  />
                </Grid>
              ) : (
                <Grid item xs={12} md={12} key={index}>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    - {item}
                  </Typography>
                </Grid>
              )}
            </>
          ))}
        </Grid>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function Experience() {
  return (
    <CardLayout title="Experience" bg={`url("/images/bg5.jpg")`}>
      <Typography variant="h4" mt={2}>
        Internships : Business Intelligence
      </Typography>
      <Timeline>
        {INTERNSHIPS.map((item, index) => (
          <OrderItem
            key={item.title}
            item={item}
            isLast={index === TIMELINES.length - 1}
          />
        ))}
      </Timeline>
      <Typography variant="h4" mt={2}>
        Frontend Developer
      </Typography>
      <Timeline>
        {TIMELINES.map((item, index) => (
          <OrderItem
            key={item.title}
            item={item}
            isLast={index === TIMELINES.length - 1}
          />
        ))}
      </Timeline>
    </CardLayout>
  );
}
