import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useTransition, animated, config } from "react-spring";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";

import { AnimatedNavBar } from "../routing/AnimatedNavBar";

const NAME = "Xavier Micah Ramirez";

const AnimatedName = ({ hasRendered }: { hasRendered: boolean }) => {
  const nameTransition = useTransition(
    { name: NAME, key: NAME },
    item => item.key,
    {
      from: { position: "relative", opacity: 0 },
      enter: { opacity: 1 },
      config: config.molasses,
      immediate: hasRendered
    }
  );
  return (
    <>
      {nameTransition.map(({ item, props, key }) => {
        return (
          <Link key={key} href="/" as="/">
            <animated.a key={key} style={props}>
              <Typography variant="h2" color="textSecondary">
                {item.name}
              </Typography>
            </animated.a>
          </Link>
        );
      })}
    </>
  );
};

const paperStyles = makeStyles({
  root: {
    height: "100%",
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "100px"
  }
});

export const AppLayout = (props: {
  hasRendered: boolean;
  children: JSX.Element[] | JSX.Element;
}) => {
  const appLayoutPaperStyles = paperStyles();
  return (
    <Grid
      container
      alignItems="stretch"
      direction="column"
      style={{ height: "100%" }}
    >
      <Grid
        container
        alignItems="center"
        direction="row"
        justify="space-evenly"
      >
        <Grid item xs={12} style={{ margin: "20px" }}>
          <AnimatedName hasRendered={props.hasRendered} />
        </Grid>
        <AnimatedNavBar hasRendered={props.hasRendered} />
      </Grid>
      <Grid container justify={"center"} style={{ flexGrow: 1 }}>
        <Grid item xs={12} sm={12} md={10}>
          <Paper className={appLayoutPaperStyles.root}>{props.children}</Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
