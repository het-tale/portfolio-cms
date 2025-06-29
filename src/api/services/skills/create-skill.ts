import client from "@/api/axios";
import type { Skill } from "@/types/skill";

export default async function CreateSkill(skill: Skill) {
	const newSkill = await client.post("/skill/create_skill", skill);
	return newSkill.data;
}
