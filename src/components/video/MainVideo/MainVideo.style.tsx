/** @jsxImportSource @emotion/react */
import { Grid } from "@mui/material";
import { PlayCircleIcon } from "../../icons";

type MainVideoThumbnailProps = {
  thumbSrc: string | undefined;
  onPlay?: () => void;
  isPlaying?: boolean;
};

const MainVideoThumbnail = ({
  thumbSrc,
  onPlay,
  isPlaying,
}: MainVideoThumbnailProps) => {
  return (
    <Grid
      container
      sx={{
        position: "relative",
      }}
    >
      {!isPlaying && (
        <PlayCircleIcon
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: 130,
            zIndex: 1,
            cursor: "pointer",
          }}
          onClick={onPlay}
        />
      )}
      <img css={{ width: "100%" }} src={thumbSrc} />
    </Grid>
  );
};

export { MainVideoThumbnail };
