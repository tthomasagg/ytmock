import { Grid, Skeleton, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import {
  decodeDurationString,
  formatViewsCount,
  parseElapsedTime,
} from "../../../helpers";
import { CardVideoThumbnail } from "./CardVideo.style.tsx";

const CardVideo = ({ video }) => {
  const videoId =
    typeof video?.id === "string" ? video?.id : video?.id?.videoId;

  return !video?.snippet ? (
    <Skeleton />
  ) : (
    <Grid container direction="row" mb={1}>
      <Grid size={4}>
        <Link to={`/watch/${videoId}`}>
          <CardVideoThumbnail
            thumbSrc={
              video.snippet.thumbnails?.standard?.url ||
              video.snippet.thumbnails?.medium?.url
            }
            duration={
              video.contentDetails?.duration &&
              decodeDurationString(video.contentDetails?.duration)
            }
            isLive={video.snippet.liveBroadcastContent === "live"}
          />
        </Link>
      </Grid>
      <Grid size={6} ml={1}>
        <Link to={`/watch/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold">
            {video.snippet.title}
          </Typography>
        </Link>
        <Typography variant="subtitle2" component="span">
          {video.statistics &&
            `${formatViewsCount(video.statistics.viewCount)} views - `}
          {parseElapsedTime(video.snippet.publishedAt)} ago
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CardVideo;
