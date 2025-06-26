enum Category {
	PROGRAMMING_LANGUAGES,
	FRONTEND,
	BACKEND,
	DATABASE,
	DEVOPS,
	TOOLS
}
export interface Skill {
	name: string;
	category: Category;
	years_of_experience: number;
}
