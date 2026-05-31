import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { PageNotFound } from "./components/not-found/page-not-found";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultNotFoundComponent: () => PageNotFound,
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
