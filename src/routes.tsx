import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import App from "./App";
import Login from "./components/auth/login.tsx";
import Dashboard from "./components/dashboard/dashboard.tsx";
import Projects from "./components/projects/projects.tsx";
import NewProject from "./components/projects/new-project.tsx";
import EditProject from "./components/projects/edit-project.tsx";
import Resume from "./components/resume/resume.tsx";
import Skills from "./components/skills/skills.tsx";
import NewSkill from "./components/skills/new-skill.tsx";
import EditSkill from "./components/skills/edit-skill.tsx";

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
 * Resume Routes
 *
 */
const resumeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/resume",
	component: Resume
});

/**
 *
 * Skill Routes
 *
 */
const skillsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/skills",
	component: Skills
});

const newSkillRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/skills/new",
	component: NewSkill
});

const editSkillRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/skills/edit/$id",
	component: EditSkill
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
	editProjectRoute,
	resumeRoute,
	skillsRoute,
	newSkillRoute,
	editSkillRoute
]);

export default rootRoute;
