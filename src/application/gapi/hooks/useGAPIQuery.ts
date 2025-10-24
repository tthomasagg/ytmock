import { useQuery } from "@tanstack/react-query";

const useGAPIQuery = (queryKey: string[], queryFn, enabled?) => {
  const { status, data, error } = useQuery({
    queryKey,
    queryFn,
    enabled: enabled ?? typeof queryFn === "function",
  });

  return {
    status,
    data,
    error,
  };
};

export { useGAPIQuery };
