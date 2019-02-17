import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { ReactNode } from "react";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#015921"
    },
    secondary: {
      main: "#a1887f"
    }
  }
};

const theme = createMuiTheme(themeOptions);

interface ThemeRootProps {
  children: ReactNode;
}

const ThemeRoot = (props: ThemeRootProps) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default ThemeRoot;
