import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProviderProps } from "@material-ui/core/styles/MuiThemeProvider";
import { createGenerateClassName } from "@material-ui/styles";
import { SheetsRegistry, GenerateId } from "jss";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#015921",
      light: "#3d874a",
      dark: "#002e00"
    },
    secondary: {
      main: "#a1887f",
      light: "#d3b8ae",
      dark: "#725b53"
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export interface PageContext extends MuiThemeProviderProps {
  generateClassName: GenerateId; // not sure what goes here
  sheetsRegistry: SheetsRegistry;
}

export default function(): PageContext {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
    children: undefined
  };
}
