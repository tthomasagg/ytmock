import {
  Grid,
  Typography,
  IconButton,
  Box,
  Button,
  Skeleton,
} from "@mui/material";
import { Suspense, useMemo, useState } from "react";
import {
  formatViewsCount,
  parseElapsedTime,
  replaceFrameWidthHeight,
} from "../../../helpers";
import { ThumbUpIcon } from "../../icons";

const MainVideo = ({ video }) => {
  const [expanded, setExpanded] = useState(false);

  const memoizedPlayer = useMemo(() => {
    if (!video?.player?.embedHtml) {
      return <Skeleton height={633}></Skeleton>;
    }
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: replaceFrameWidthHeight(
            video?.player?.embedHtml,
            "100%",
            "633px",
          ),
        }}
      />
    );
  }, [video?.player?.embedHtml, replaceFrameWidthHeight]);

  return (
    <Suspense fallback={<>Loading...</>}>
      <Grid container>
        <Grid size={12}>{memoizedPlayer}</Grid>
        <Grid container size={12}>
          <Grid size={9}>
            <Typography variant="h5">{video?.snippet?.title}</Typography>
          </Grid>
          <Grid size={3} display="flex" justifyContent="flex-end">
            <IconButton color="primary" size="small">
              <ThumbUpIcon />
              <Typography variant="subtitle1" component="span" sx={{ ml: 1 }}>
                {formatViewsCount(video?.statistics?.likeCount)}
              </Typography>
            </IconButton>
          </Grid>
        </Grid>
        <Grid size={12} container mt={3}>
          <Grid size={3}>
            <Typography variant="subtitle1" component="span" mr={1}>
              {expanded
                ? video?.statistics?.viewCount
                : formatViewsCount(video?.statistics?.viewCount)}{" "}
              views
            </Typography>
            <Typography variant="subtitle1" component="span">
              {expanded
                ? new Date(video?.snippet?.publishedAt).toDateString()
                : `${parseElapsedTime(video?.snippet?.publishedAt)} ago`}
            </Typography>
          </Grid>
        </Grid>
        <Grid size={12} mt={1}>
          <Box
            sx={{
              maxHeight: expanded ? "none" : "100px",
              overflow: expanded ? "visible" : "hidden",
              position: "relative",
            }}
          >
            <Typography variant="body1" whiteSpace="pre-wrap">
              {video?.snippet?.description}
            </Typography>
          </Box>
        </Grid>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? "...less" : "...more"}
        </Button>
      </Grid>
    </Suspense>
  );
};

export default MainVideo;
