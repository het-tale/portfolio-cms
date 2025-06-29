import client from "@/api/axios";

const GetSkillById = async (skill_id: string) => {
	const skill = await client.get(`/skill/get_skill_by_id/${skill_id}`);
	return skill.data;
};

export default GetSkillById;
