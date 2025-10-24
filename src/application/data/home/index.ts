import { useGAPIQuery } from "../../gapi/hooks/useGAPIQuery.ts";
import { useGoogleClient } from "../../gapi/hooks/useGoogleClient.tsx";
import { buildQueryFN } from "../index";

const HOME_VIDEO_QUERY_KEY = "homeVideos";

const useFetchVideos = (maxResults?: number) => {
  const { client } = useGoogleClient();
  return buildQueryFN(
    client,
    client?.youtube.videos.list({
      chart: "mostPopular",
      part: "snippet,contentDetails,statistics,player",
      maxResults: maxResults || 17,
    }),
  );
};

const useFetchHomeVideos = (maxResults?: number) => {
  const fetchHomeVideos = useFetchVideos(maxResults);
  const response = useGAPIQuery([HOME_VIDEO_QUERY_KEY], fetchHomeVideos);
  return {
    ...response,
    data: response.data?.result?.items,
  };
};

export { useFetchHomeVideos };
