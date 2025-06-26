import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import App from "./App";
import Login from "./components/auth/login.tsx";
import Dashboard from "./components/dashboard/dashboard.tsx";
import Projects from "./components/projects/projects.tsx";
import NewProject from "./components/projects/new-project.tsx";

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
/**
 *
 * Project Routes
 *
 */
const projectsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/projects",
	component: Projects
});

const newProjectRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/projects/new",
	component: NewProject
});

/**
 *
 * Add all routes
 */
export const routeTree = rootRoute.addChildren([
	indexRoute,
	loginRoute,
	dashboardRoute,
	projectsRoute,
	newProjectRoute
]);

export default rootRoute;
