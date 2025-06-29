export enum ProjectStatus {
	PLANNING = "planning",
	IN_PROGRESS = "in_progress",
	COMPLETED = "completed"
}
export interface Project {
	title: string;
	description: string;
	project_status: ProjectStatus;
	github_link: string;
	website_link: string;
	project_img: FileList;
}

export interface ProjectResponse {
	project_id: string;
	title: string;
	description: string;
	status: string;
	github_link: string;
	website_link: string;
	illustration: string;
}

export type Status = "planning" | "in_progress" | "completed" | undefined;
