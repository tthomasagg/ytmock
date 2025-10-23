import { Box, Button, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";

const ErrorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      gap={2}
    >
      <Typography variant="h3" color="error">
        Oops! Something went wrong
      </Typography>
      <Typography variant="body1">
        We're sorry, but there was an error processing your request
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        preload={false}
      >
        Return to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
