import { BrowserRouter as Router } from "react-router-dom";
import { Grid2, CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useContext } from "react";
import Header from "./components/common/Header";
import Content from "./components/common/Content";
import Footer from "./components/common/Footer";
import { lightTheme, darkTheme } from "./theme";
import { ThemeContext } from "./themeContext";
import "./index.css";

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Grid2 container spacing={2} padding={1} direction="column" sx={{ minHeight: "100vh" }}>
          <Grid2 container size={{ xs: 12 }}>
            <Header />
          </Grid2>

          <Grid2 container size={{ xs: 12 }} sx={{ flexGrow: 1, overflow: "auto" }}>
            <Content />
          </Grid2>

          <Grid2 container size={{ xs: 12 }}>
            <Footer />
          </Grid2>
        </Grid2>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
