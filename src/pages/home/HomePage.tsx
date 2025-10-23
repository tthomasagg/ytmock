import { Grid, Typography } from "@mui/material";
import { CardVideo, MainVideo } from "../../components";
import { useFetchHomeVideos } from "../../application/data/home";
import { Suspense } from "react";

const HomePage = () => {
  const { data, status } = useFetchHomeVideos();

  const mainVideo = data?.[0];

  const sidebarVideos = data?.slice(1, 9);

  const bottomVideos = data?.slice(9);

  if (status !== "success") {
    return;
  }

  return (
    <Suspense fallback="Loading...">
      <Grid
        container
        id="home-content"
        direction="column"
        paddingX={5}
        paddingY={1}
        spacing={2}
      >
        <Grid item container size={12} id="featured-container">
          <Grid item container size={10} id="featured">
            <Grid item size={12}>
              <Typography variant="h4">Featured</Typography>
            </Grid>
            <Grid item size={9}>
              <MainVideo video={mainVideo} />
            </Grid>
            <Grid item size={3} id="related-videos">
              {sidebarVideos.map((video) => (
                <CardVideo
                  key={video?.id?.videoId || video?.id}
                  video={video}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item size={2} id="square-popup"></Grid>
        </Grid>
        <Grid item size={12} mt={2} id="more-videos">
          <Grid item size={12}>
            <Typography variant="h4">More Videos</Typography>
          </Grid>
          <Grid container spacing={2} mt={2}>
            {bottomVideos.map((video, i) => (
              <Grid item size={3} key={video?.id?.videoId || video?.id}>
                <CardVideo video={video} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Suspense>
  );
};

export default HomePage;
