import { toast } from "sonner";
import client from "../../axios";

const GetProjects = async () => {
	try {
		const projects = await client.get("/projects/get_all_projects");
		return projects.data;
	} catch (err) {
		const message =
			err instanceof Error
				? err.message
				: "Something went wrong. Please try again.";
		toast.error(message);
	}
};

export default GetProjects;
