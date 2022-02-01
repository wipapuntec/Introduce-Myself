import { Grid } from "../Grid";
import { Typography } from "../Typography";
import { FunctionComponent } from "react";
import { CardLayout } from "../layout";

const Tools: FunctionComponent = () => {
  const skills = [
    {
      name: "Visual Studio Code",
      images: "/images/vs-code.png",
    },
    {
      name: "Android Studio",
      images: "/images/android.png",
    },
    {
      name: "Gitlab",
      images: "/images/gitlab.png",
    },
    {
      name: "GitHub",
      images: "/images/github.png",
    },
    {
      name: "Sourcetree",
      images: "/images/sourcetree.png",
    },
    {
      name: "Slack",
      images: "/images/slack.png",
    },
    {
      name: "ClickUp",
      images: "/images/clickUp.png",
    },
    {
      name: "Zeplin",
      images: "/images/zeplin.png",
    },
    {
      name: "Figma",
      images: "/images/Figma.png",
    },
    {
      name: "Adobe XD",
      images: "/images/xd.png",
    },
    {
      name: "Vault",
      images: "/images/Vault.png",
    },
    {
      name: "Jenkins",
      images: "/images/Jenkins.png",
    },
    {
      name: "Postman",
      images: "/images/Postman.png",
    },
    {
      name: "Tableau",
      images: "/images/Tableau.png",
    },
    {
      name: "Power BI",
      images: "/images/bi.png",
    },
  ];
  const assetPrefix = "/https://wipapuntec.github.io/Introduce-Myself";

  return (
    <CardLayout title="Tools" bg={`url("/images/bg7.jpg")`}>
      <Grid container spacing={2} textAlign="center" my={2}>
        {skills?.map((item, index) => (
          <Grid item md={3} my={1} key={index}>
            <img
              alt="tools"
              src={assetPrefix + item.images}
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

export default Tools;
