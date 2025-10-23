import { Grid, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      sx={{
        height: "100vh",
      }}
    >
      <Typography>Page Not Found</Typography>
    </Grid>
  );
};

export default NotFound;
