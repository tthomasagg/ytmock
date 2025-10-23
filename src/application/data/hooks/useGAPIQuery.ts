import { useQuery } from "@tanstack/react-query";

const useGAPIQuery = (queryKey: string[], queryFn, enabled = false) => {
  const { status, data, error } = useQuery({
    queryKey,
    queryFn,
    enabled,
  });

  return {
    status,
    data,
    error,
  };
};

export { useGAPIQuery };
