import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import { useSpring, animated, useTransition } from "react-spring";
import Link from "next/link";

import ThemeRoot from "../lib/theme";

const Test = () => {
  const [items, _] = useState([
    { key: "About Me", text: "About Me", i: 1 },
    { key: "Projects", text: "Projects", i: 2 }
  ]);
  const transitions = useTransition(items, item => item.key, {
    from: { transform: `translate(0px, 0px)` },
    enter: { transform: `translate(120px, 0px)` }
  });
  return (
    <ThemeRoot>
      <Grid container>
        <Grid container>
          {transitions.map(({ item, props, key }) => {
            console.log(item, key);
            return (
              <Grid key={key} item xs={2}>
                <animated.div style={props}>
                  <Link href="/About">
                    <a>{item.text}</a>
                  </Link>
                </animated.div>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={10}>
          <Paper style={{ width: 600, height: 400 }} />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </ThemeRoot>
  );
};

export default Test;
