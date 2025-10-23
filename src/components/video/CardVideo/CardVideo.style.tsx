/** @jsxImportSource @emotion/react */
import { Grid, Typography } from "@mui/material";
import { SensorsIcon } from "../../icons";
import { CardVideoThumbnailProps, DurationStampProps } from "./CardVideo.types";

const DurationStamp = ({ duration }: DurationStampProps) => {
  return (
    <Typography
      css={{
        position: "absolute",
        bottom: 8,
        right: 8,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: 4,
        borderRadius: 4,
        fontSize: 14,
      }}
      color="white"
    >
      {duration}
    </Typography>
  );
};

const LiveStamp = () => {
  return (
    <Typography
      css={{
        position: "absolute",
        bottom: 8,
        right: 8,
        backgroundColor: "rgba(255, 0, 0, 0.6)",
        padding: 4,
        borderRadius: 4,
        fontSize: 14,
        display: "flex",
      }}
      color="white"
    >
      <SensorsIcon mr={1} /> LIVE
    </Typography>
  );
};

const CardVideoThumbnail = ({
  thumbSrc,
  duration,
  isLive,
}: CardVideoThumbnailProps) => {
  return (
    <Grid position="relative" display="flex">
      <img
        css={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          flexGrow: 1,
        }}
        src={thumbSrc}
      />
      {duration && <DurationStamp duration={duration} />}
      {isLive && <LiveStamp />}
    </Grid>
  );
};

export { CardVideoThumbnail };
