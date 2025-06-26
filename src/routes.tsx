import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import App from "./App";
import Login from "./components/auth/login.tsx";
import Dashboard from "./components/dashboard/dashboard.tsx";

const rootRoute = createRootRoute({
	component: () => (
		<>
			<Outlet />
		</>
	)
});

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: App
});

export const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/login",
	component: Login
});

const dashboardRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/dashboard",
	component: Dashboard
});

export const routeTree = rootRoute.addChildren([
	indexRoute,
	loginRoute,
	dashboardRoute
]);

export default rootRoute;
