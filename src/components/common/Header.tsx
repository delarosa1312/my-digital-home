// src/components/common/Header.tsx
import { Grid2, Card, CardHeader, IconButton } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../themeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Grid2 container size={{ xs: 12 }}>
      <Card sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <CardHeader title="Header" />
        <IconButton onClick={toggleDarkMode} color="inherit">
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Card>
    </Grid2>
  );
};

export default Header;
