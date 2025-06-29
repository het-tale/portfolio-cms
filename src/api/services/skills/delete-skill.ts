import client from "@/api/axios";

export default async function DeleteSkill(skill_id: string) {
	const deleteSkill = await client.delete(`/skill/delete_skill/${skill_id}`);
	return deleteSkill.data;
}
