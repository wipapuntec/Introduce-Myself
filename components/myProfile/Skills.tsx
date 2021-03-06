import { Grid } from "../Grid";
import { Typography } from "../Typography";
import { FunctionComponent } from "react";
import { CardLayout } from "../layout";
import { assetPrefix } from "../../next.config";

const Skills: FunctionComponent = () => {
  const skills = [
    {
      name: "JavaScript",
      images: "/images/javascript.png",
    },
    {
      name: "TypeScript",
      images: "/images/ts.png",
    },
    {
      name: "HTML",
      images: "/images/html.png",
    },
    {
      name: "CSS",
      images: "/images/css.png",
    },
  ];
  return (
    <CardLayout title="Skills" bg={`url("${assetPrefix}/images/bg4.jpg")`}>
      <Grid container spacing={2} textAlign="center" my={1} justifyContent="center">
        {skills?.map((item, index) => (
          <Grid item sm={6} md={3} key={index} >
            <img
              alt="skills"
              src={`${assetPrefix}${item.images}`}
              width={100}
              height={100}
            />
            <Typography variant="h5" mt={1}>
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </CardLayout>
  );
};

export default Skills;
