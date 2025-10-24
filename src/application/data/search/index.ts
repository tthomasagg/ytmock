import { useGAPIQuery } from "../../gapi/hooks/useGAPIQuery.ts";
import { useGoogleClient } from "../../gapi/hooks/useGoogleClient.tsx";
import { buildQueryFN } from "../index";

const SEARCH_QUERY_KEY = "searchQuery";

const useFetchSearch = (q: string) => {
  const { client } = useGoogleClient();
  return buildQueryFN(
    client,
    client?.youtube.search.list({
      part: "snippet",
      type: "video",
      maxResults: 10,
      q,
    }),
  );
};

const useYoutubeSearch = (searchTerm: string) => {
  const queryFn = useFetchSearch(searchTerm);

  const response = useGAPIQuery([SEARCH_QUERY_KEY, searchTerm], queryFn);
  return {
    ...response,
    data: response.data?.result?.items
      ?.filter((item) => item.id?.videoId)
      .filter(Boolean),
  };
};

export { useYoutubeSearch };
