import React, { useRef, RefObject } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styledBy from "styled-by";
import {
  useChain,
  animated,
  useTransition,
  ReactSpringHook,
  UseTransitionResult
} from "react-spring";
import Link from "next/link";

import { routeConfig } from "./routeConfig";

export const navBarAnimations = (hasRendered: boolean) => {
  const chainRefs: RefObject<ReactSpringHook>[] = [];
  const consolidatedTransitions: UseTransitionResult<any, any>[] = [];
  routeConfig.forEach(element => {
    const ref = useRef(null);
    chainRefs.push(ref);
    consolidatedTransitions.push(
      ...useTransition([element], item => item.key, {
        ref: ref,
        from: { transform: `translate(-120px, 0px)`, opacity: 0 },
        enter: { transform: `translate(0px, 0px)`, opacity: 1 },
        immediate: hasRendered
      })
    );
  });
  useChain(chainRefs);
  return consolidatedTransitions;
};

// div styles
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

console.log("hello");
export const AnimatedNavBubble = (props: AnimatedBarBubbleProps) => {
  const theme: Theme = useTheme();
  const classes = useStyles({ color: theme.palette.primary.main });
  return (
    <animated.div
      style={{ ...props.animatedProps, textAlign: "center" }}
      className={classes.root}
    >
      <Link href={props.href} as={props.href}>
        <Typography variant="h5" color="textPrimary">
          {props.text}
        </Typography>
      </Link>
    </animated.div>
  );
};

export const AnimatedNavBar = (props: { hasRendered: boolean }) => {
  const navBarTransitions = navBarAnimations(props.hasRendered);
  return (
    <>
      {navBarTransitions.map(({ item, props, key }) => {
        return (
          <Grid key={key} item xs={12} sm={12} md={3}>
            <AnimatedNavBubble
              href={item.href}
              text={item.text}
              animatedProps={props}
            />
          </Grid>
        );
      })}
    </>
  );
};
