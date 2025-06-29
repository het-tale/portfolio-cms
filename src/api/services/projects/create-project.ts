import client from "@/api/axios";
import type { Project } from "@/types/project";

export default async function CreateProject(project: Project) {
	const formData = new FormData();
	formData.append("title", project.title);
	formData.append("description", project.description);
	formData.append("project_status", project.project_status);
	formData.append("github_link", project.github_link);
	formData.append("website_link", project.website_link);
	const fileList = project.project_img as FileList;
	if (fileList.length > 0) {
		formData.append("project_img", fileList[0]); // File object
	}
	const newProject = await client.post("/projects/create_project", formData);
	return newProject.data;
}
