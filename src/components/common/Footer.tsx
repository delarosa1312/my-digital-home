// src/components/common/Footer.tsx
import { Grid2, Container, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-primary p-4 text-center text-white">
      <Container>
        <Grid2 container justifyContent="center" alignItems="center">
          <Grid2 size={{ xs: 12 }}>
            <Typography variant="body2" color="inherit">
              &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Footer;
