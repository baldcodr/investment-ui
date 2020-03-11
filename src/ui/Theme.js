import { createMuiTheme } from "@material-ui/core/styles";

const arcGreen = "#11998e";
const arcBlue = "#38ef7d";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      green: `${arcGreen}`
    },
    primary: {
      main: `${arcGreen}`
    },
    secondary: {
      main: `${arcBlue}`
    }
  }
});
