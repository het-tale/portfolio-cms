import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import App from "./App";
import Login from "./components/auth/login.tsx";
import Dashboard from "./components/dashboard/dashboard.tsx";
import Projects from "./components/projects/projects.tsx";
import NewProject from "./components/projects/new-project.tsx";
import EditProject from "./components/projects/edit-project.tsx";

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

const editProjectRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/projects/edit/$id",
	component: EditProject
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
	newProjectRoute,
	editProjectRoute
]);

export default rootRoute;
