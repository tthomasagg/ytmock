import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "./application/data/client.ts";
import { RouterProvider } from "@tanstack/react-router";
import router from "./routes";
import "./App.css";

function App() {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
