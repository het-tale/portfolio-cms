export enum Category {
	PROGRAMMING_LANGUAGES = "programming_languages",
	FRONTEND = "frontend",
	BACKEND = "backend",
	DATABASE = "database",
	DEVOPS = "devops",
	TOOLS = "tools"
}
export interface Skill {
	skill_id?: string;
	name: string;
	category: Category;
	years_of_experience: number;
}

export interface SkillResponse {
	skill_id: string;
	name: string;
	category: Category;
	years_of_experience: number;
}
