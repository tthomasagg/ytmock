import { SearchBar } from "./index.ts";
import { Grid } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { PlayCircleIcon } from "../icons";

const Header = () => {
  return (
    <Grid container id="header">
      <Grid size={4} pl={5}>
        <Link to={"/"}>
          <PlayCircleIcon
            sx={{
              color: "red",
              fontSize: 40,
            }}
            mt={1}
          />
        </Link>
      </Grid>
      <Grid size={4}>
        <SearchBar />
      </Grid>
    </Grid>
  );
};

export default Header;
