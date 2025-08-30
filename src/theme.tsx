import { createTheme } from "@mui/material/styles";
import "./index.css";
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans, sans-serif",
  },
  components: {
    MuiSelect: {
      defaultProps: {
        dir: "rtl",
      },
    }
  },
});

export default theme;
