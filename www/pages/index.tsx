import "typeface-roboto";
import React, { useRef, RefObject } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import styledBy from "styled-by";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import {
  useChain,
  animated,
  useTransition,
  ReactSpringHook,
  UseTransitionResult
} from "react-spring";
import Link from "next/link";

import { Theme } from "@material-ui/core";

const routeConfig = [
  { key: "Projects", text: "Projects", href: "/projects" },
  { key: "Blog", text: "Blog", href: "/blog" },
  { key: "Snowboarding", text: "Snowboarding", href: "/snowboarding" },
  { key: "Work with me!", text: "Work with me!", href: "/work" }
];

const animatedAppBar = () => {
  const chainRefs: RefObject<ReactSpringHook>[] = [];
  const consolidatedTransitions: UseTransitionResult<any, any>[] = [];
  routeConfig.forEach(element => {
    const ref = useRef(null);
    chainRefs.push(ref);
    consolidatedTransitions.push(
      ...useTransition([element], item => item.key, {
        ref: ref,
        from: { transform: `translate(-120px, 0px)`, opacity: 0 },
        enter: { transform: `translate(0px, 0px)`, opacity: 1 }
      })
    );
  });
  useChain(chainRefs);
  return consolidatedTransitions;
};

const useStyles = makeStyles({
  root: {
    backgroundColor: styledBy("color"),
    borderRadius: "20px",
    margin: "10px",
    paddingTop: "8px",
    paddingBottom: "8px"
  }
});

interface AnimatedBarBubbleProps {
  animatedProps: any;
  text: string;
  href: string;
}

const AnimatedBarBubble = (props: AnimatedBarBubbleProps) => {
  const theme: Theme = useTheme();
  const classes = useStyles({ color: theme.palette.primary.main });
  return (
    <animated.div
      style={{ ...props.animatedProps, textAlign: "center" }}
      className={classes.root}
    >
      <Link href={props.href}>
        <Typography color="textPrimary">{props.text}</Typography>
      </Link>
    </animated.div>
  );
};

const Main = () => {
  const transitions = animatedAppBar();
  return (
    <Grid container>
      <Grid
        container
        alignItems="center"
        direction="row"
        justify="space-evenly"
      >
        {transitions.map(({ item, props, key }) => {
          return (
            <Grid key={key} item xs={3}>
              <AnimatedBarBubble
                href={item.href}
                text={item.text}
                animatedProps={props}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid container alignItems={"center"}>
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={12}>
              <Paper>
                <Typography color={"textSecondary"}>
                  Xavier Micah Ramirez. I am currently based in Austin, Texas.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <Typography color={"textSecondary"}>
                  Based in Austin, TX
                </Typography>
                <Typography color={"textSecondary"}>
                  Looking for opportunities in Tokyo, JPN{" "}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <Typography color={"textSecondary"}>
                  Specialized in iteratively deploying user-facing applications
                  in order to meet the needs of customers and businesses.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
