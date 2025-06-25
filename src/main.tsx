import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
	Outlet,
	RouterProvider,
	createRootRoute,
	createRoute,
	createRouter
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles.css";
import reportWebVitals from "./reportWebVitals.ts";

import App from "./App.tsx";
import Login from "./components/auth/login.tsx";
import { Toaster } from "@/components/ui/sonner";

const rootRoute = createRootRoute({
	component: () => (
		<>
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
		</>
	)
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: App
});

const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/login",
	component: Login
});

const routeTree = rootRoute.addChildren([indexRoute, loginRoute]);

const router = createRouter({
	routeTree,
	context: {},
	defaultPreload: "intent",
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
// create tanstack query client
const queryClient = new QueryClient();

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<Toaster />
			</QueryClientProvider>
		</StrictMode>
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
