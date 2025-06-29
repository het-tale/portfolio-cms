import client from "@/api/axios";

export default async function DeleteProject(project_id: string) {
	const deleteProject = await client.delete(
		`/projects/delete_project/${project_id}`
	);
	return deleteProject.data;
}
