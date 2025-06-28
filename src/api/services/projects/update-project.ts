import client from "@/api/axios";

export default async function UpdateProject(
	project_id: string,
	project: FormData
) {
	const updatedProject = await client.put(
		`/projects/update_project/${project_id}`,
		project,
		{
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}
	);
	return updatedProject.data;
}
