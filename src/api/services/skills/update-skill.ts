import client from "@/api/axios";
import type { Skill } from "@/types/skill";

export default async function UpdateSkill(skill_id: string, skill: Skill) {
	const updatedSkill = await client.put(
		`/skill/update_skill/${skill_id}`,
		skill
	);
	return updatedSkill.data;
}
