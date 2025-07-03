import {
	Outlet,
	createRootRoute,
	createRoute,
	redirect
} from "@tanstack/react-router";
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
import GetUser from "./api/services/get-user.ts";
import { queryClient } from "./lib/queryClient.ts";
import { AuthProvider } from "./providers/auth-guard.tsx";

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
	component: () => <App />
});

const authLayoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/app",
	component: AuthProvider,
	beforeLoad: async () => {
		try {
			const user = await queryClient.ensureQueryData({
				queryKey: ["user"],
				queryFn: GetUser
			});
			if (!user) throw redirect({ to: "/login" });
		} catch {
			throw redirect({ to: "/login" });
		}
	}
});

export const loginRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/login",
	component: () => <Login />
});

const dashboardRoute = createRoute({
	getParentRoute: () => authLayoutRoute,
	path: "/dashboard",
	component: Dashboard
});
/**
 *
 * Project Routes
 *
 */
const projectsRoute = createRoute({
	getParentRoute: () => authLayoutRoute,
	path: "/projects",
	component: Projects
});

const newProjectRoute = createRoute({
	getParentRoute: () => authLayoutRoute,
	path: "/projects/new",
	component: NewProject
});

const editProjectRoute = createRoute({
	getParentRoute: () => authLayoutRoute,
	path: "/projects/edit/$id",
	component: EditProject
});

/**
 *
 * Resume Routes
 *
 */
const resumeRoute = createRoute({
	getParentRoute: () => authLayoutRoute,
	path: "/resume",
	component: Resume
});

/**
 *
 * Skill Routes
 *
 */
const skillsRoute = createRoute({
	getParentRoute: () => authLayoutRoute,
	path: "/skills",
	component: Skills
});

const newSkillRoute = createRoute({
	getParentRoute: () => authLayoutRoute,
	path: "/skills/new",
	component: NewSkill
});

const editSkillRoute = createRoute({
	getParentRoute: () => authLayoutRoute,
	path: "/skills/edit/$id",
	component: EditSkill
});

/**
 *
 * Add all routes
 */
export const routeTree = rootRoute.addChildren([
	authLayoutRoute,
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
