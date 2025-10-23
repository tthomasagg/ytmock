import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./route.tree";

const router = createRouter({ routeTree });

export default router;
