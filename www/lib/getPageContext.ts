import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProviderProps } from "@material-ui/core/styles/MuiThemeProvider";
import { createGenerateClassName } from "@material-ui/styles";
import { SheetsRegistry, GenerateId } from "jss";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#015921"
    },
    secondary: {
      main: "#a1887f"
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
