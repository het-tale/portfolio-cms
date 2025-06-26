enum ProjectStatus {
	PLANNING,
	IN_PROGRESS,
	COMPLETED
}
export interface Project {
	title: string;
	description: string;
	status: ProjectStatus;
	github_link: string;
	website_link: string;
	illustration: string;
}
