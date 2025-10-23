import { useGAPIQuery } from "../hooks/useGAPIQuery.ts";
import { useGoogleClient } from "../../gapi/hooks/useGoogleClient.tsx";

const SEARCH_QUERY_KEY = "searchQuery";

const useFetchSearch = (q: string) => {
  const { client } = useGoogleClient();
  return client
    ? () =>
        client?.youtube.search.list({
          part: "snippet",
          type: "video",
          maxResults: 10,
          q,
        })
    : new Promise((resolve) => resolve(null));
};

const useYoutubeSearch = (searchTerm: string) => {
  const queryFn = useFetchSearch(searchTerm);

  const response = useGAPIQuery(
    [SEARCH_QUERY_KEY, searchTerm],
    queryFn,
    typeof queryFn === "function",
  );
  return {
    ...response,
    data: response.data?.result?.items
      ?.filter((item) => item.id?.videoId)
      .filter(Boolean),
  };
};

export { useYoutubeSearch };
