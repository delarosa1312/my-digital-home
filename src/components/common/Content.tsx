import { Grid2, Card, CardHeader, CardContent } from "@mui/material";

const Content = () => {
  return (
    <Grid2 container size={{ xs: 12 }}>
      <Card sx={{ width: "100%", height: "100%" }}>
        <CardHeader title="Content" />
        <CardContent>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12 }}>
              {/* Component with different breakpoints */}
              <p>Component 3</p>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              {/* Component with different breakpoints */}
              <p>Component 4</p>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default Content;
