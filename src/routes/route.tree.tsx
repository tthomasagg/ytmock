import { createRootRoute, createRoute } from "@tanstack/react-router";
import { HomePage, SearchPage, WatchPage, NotFound, ErrorPage } from "../pages";
import Layout from "../components/layout";

export const rootRoute = createRootRoute({
  component: Layout,
  notFoundComponent: NotFound,
  errorComponent: ErrorPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: SearchPage,
});

const watchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/watch/$id",
  component: WatchPage,
});

/* prettier-ignore */
const routeTree = rootRoute.addChildren([
  indexRoute,
  searchRoute,
  watchRoute
])
/* prettier-ignore-end */

export { routeTree };
