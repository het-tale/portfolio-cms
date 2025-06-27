import client from "@/api/axios";

const GetProjectById = async (project_id: string) => {
	const project = await client.get(`/projects/get_project_by_id/${project_id}`);
	return project.data;
};

export default GetProjectById;
