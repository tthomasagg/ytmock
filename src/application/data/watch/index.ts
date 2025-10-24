import { useGAPIQuery } from "../../gapi/hooks/useGAPIQuery.ts";
import { useGoogleClient } from "../../gapi/hooks/useGoogleClient.tsx";
import { buildQueryFN } from "../index";

const WATCH_VIDEO_QUERY_KEY = "watchVideos";

const useFetchVideos = (id: string) => {
  const { client } = useGoogleClient();
  return buildQueryFN(
    client,
    client?.youtube.videos.list({
      part: "snippet,contentDetails,statistics,player",
      id,
    }),
  );
};

const useFetchWatchVideos = (id: string) => {
  const fetchVideoById = useFetchVideos(id);
  const response = useGAPIQuery([WATCH_VIDEO_QUERY_KEY, id], fetchVideoById);
  return {
    ...response,
    data: response.data?.result?.items,
  };
};

export { useFetchWatchVideos };
