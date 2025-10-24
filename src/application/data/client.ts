import { QueryClient } from "@tanstack/react-query";

const isProd = import.meta.env.MODE !== "production";

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}

let queryClient: QueryClient | null = null;

export const getQueryClient = () => {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
    if (!isProd) {
      window.__TANSTACK_QUERY_CLIENT__ = queryClient;
    }
  }

  return queryClient;
};
