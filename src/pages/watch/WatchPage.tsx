import { Grid } from "@mui/material";
import { CardVideo, MainVideo } from "../../components";
import { useFetchHomeVideos } from "../../application/data/home";
import { Suspense } from "react";
import { useParams } from "@tanstack/react-router";
import { useFetchWatchVideos } from "../../application/data/watch";

const WatchPage = () => {
  const { id } = useParams({ strict: false });

  const { data: moreVideosData, status: moreVideosStatus } =
    useFetchHomeVideos();
  const { data, status } = useFetchWatchVideos(id);

  const mainVideo = data?.[0];

  const sidebarVideos = moreVideosData?.slice(1, 9);

  if (status !== "success" && moreVideosStatus !== "success") {
    return;
  }

  return (
    <Suspense fallback="Loading...">
      <Grid
        container
        id="watch-content"
        direction="column"
        paddingX={5}
        paddingY={1}
        spacing={2}
        mt={2}
      >
        <Grid item container size={12} id="watch-container">
          <Grid item container size={10} id="watch">
            <Grid item size={9}>
              <MainVideo video={mainVideo} />
            </Grid>
            <Grid item size={3} id="related-videos">
              {sidebarVideos?.map((video) => (
                <CardVideo
                  key={video?.id?.videoId || video?.id}
                  video={video}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item size={2} id="square-popup"></Grid>
        </Grid>
      </Grid>
    </Suspense>
  );
};

export default WatchPage;
