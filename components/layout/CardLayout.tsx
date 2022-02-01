import React, { FunctionComponent } from "react";
import { Card, CardContent, Grid, Divider } from "../Grid";
import { Typography } from "../Typography";
import { makeStyles } from "@mui/styles";

interface CardProp {
  title?: string;
  children?: any;
  bg?: string;
}

const useStyles = makeStyles({
  content: (props: any) => ({
    background: props.bg ?? `url("/images/bg6.jpg")`,
    backgroundSize: "cover",
  }),
});

const CardLayout: FunctionComponent<CardProp> = ({ title, children, bg }) => {
  const classes = useStyles({ bg });
  return (
    <Grid container px={5} py={9} className={classes.content}>
      <Grid item sm={12} md={12}>
        <Card
          sx={{
            "& .MuiTimelineItem-missingOppositeContent:before": {
              display: "none",
            },
          }}
        >
          <CardContent>
            <Typography variant="h3" sx={{ color: "text.secondary" }} mb={1}>
              {title}
            </Typography>
            <Divider />
            {children}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardLayout;
