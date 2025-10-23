import { useGAPIQuery } from "../hooks/useGAPIQuery.ts";
import { useGoogleClient } from "../../gapi/hooks/useGoogleClient.tsx";

const useFetchVideos = (id: string) => {
  const { client } = useGoogleClient();
  return client
    ? () =>
        client?.youtube.videos.list({
          part: "snippet,contentDetails,statistics,player",
          id,
        })
    : new Promise((resolve) => resolve(null));
};

const WATCH_VIDEO_QUERY_KEY = "watchVideos";

const useFetchWatchVideos = (id: string) => {
  const fetchVideoById = useFetchVideos(id);
  const response = useGAPIQuery(
    [WATCH_VIDEO_QUERY_KEY, id],
    fetchVideoById,
    typeof fetchVideoById === "function",
  );
  return {
    ...response,
    data: response.data?.result?.items,
  };
};

export { useFetchWatchVideos };
