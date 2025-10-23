import { useGAPIQuery } from "../hooks/useGAPIQuery.ts";
import { useGoogleClient } from "../../gapi/hooks/useGoogleClient.tsx";

const useFetchVideos = (maxResults?: number) => {
  const { client } = useGoogleClient();
  return client
    ? () =>
        client?.youtube.videos.list({
          chart: "mostPopular",
          part: "snippet,contentDetails,statistics,player",
          maxResults: maxResults || 17,
        })
    : new Promise((resolve) => resolve(null));
};

const HOME_VIDEO_QUERY_KEY = "homeVideos";

const useFetchHomeVideos = (maxResults?: number) => {
  const fetchHomeVideos = useFetchVideos(maxResults);
  const response = useGAPIQuery(
    [HOME_VIDEO_QUERY_KEY],
    fetchHomeVideos,
    typeof fetchHomeVideos === "function",
  );
  return {
    ...response,
    data: response.data?.result?.items,
  };
};

export { useFetchHomeVideos };
