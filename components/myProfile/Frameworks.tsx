import { Grid } from "../Grid";
import { Typography } from "../Typography";
import { FunctionComponent } from "react";
import { CardLayout } from "../layout";
import { assetPrefix } from "../../next.config";

const Frameworks: FunctionComponent = () => {
  const framework = [
    {
      name: "React",
      images: "/images/react.png",
    },
    {
      name: "React Native",
      images: "/images/react-native.jpg",
      width: 160,
    },
    {
      name: "Preact",
      images: "/images/preact.png",
    },
    {
      name: "Next.js",
      images: "/images/next.png",
    },
  ];

  const ui = [
    {
      name: "Material UI",
      images: "/images/mtui.png",
    },
    {
      name: "Ant Design",
      images: "/images/antd.png",
    },
    {
      name: "Bootstrap",
      images: "/images/bootstrap.png",
    },
  ];
  return (
    <CardLayout title="Frameworks" bg={`url("${assetPrefix}/images/bg6.jpg")`}>
      <Grid container spacing={2} textAlign="center" my={1}>
        {framework?.map((item, index) => (
          <Grid item md={3} key={index}>
            <img
              src={`${assetPrefix}${item.images}`}
              alt="framework"
              width={item.width ?? 100}
              height={100}
            />
            <Typography variant="h5" mt={1}>
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" sx={{ color: "text.secondary" }} mt={3} mb={1}>
        UI Framework :
      </Typography>

      <Grid container spacing={2} textAlign="center" my={1}>
        {ui?.map((item, index) => (
          <Grid item md={3} key={index}>
            <img
              src={`${assetPrefix}${item.images}`}
              alt="ui-framework"
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

export default Frameworks;
