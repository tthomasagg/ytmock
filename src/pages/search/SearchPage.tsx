import { Grid, Typography, Skeleton } from "@mui/material";
import { useSearch } from "@tanstack/react-router";
import { useYoutubeSearch } from "../../application/data/search";
import { CardVideo } from "../../components";

const SearchPage = ({}) => {
  const { q } = useSearch({ from: "/search" });

  const { data, status } = useYoutubeSearch(q);

  return (
    <Grid container padding={5} spacing={2}>
      <Typography variant="h3">Videos de: "{q}"</Typography>
      <Grid container size={12} mt={2} direction="column">
        {status === "pending" ? (
          <Skeleton
            height="100vh"
            width="200px"
            sx={{
              position: "absolute",
              top: 0,
            }}
          />
        ) : (
          data?.map((video) => (
            <Grid container key={video?.id?.videoId || video?.id} size={4}>
              <CardVideo video={video} />
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default SearchPage;
