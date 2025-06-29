import GetSkillById from "@/api/services/skills/get-skill-by-id";
import type { Skill } from "@/types/skill";
import { useQuery, type QueryFunctionContext } from "@tanstack/react-query";
import type { AxiosError } from "axios";

const useGetSkillById = (skill_id: string) => {
	return useQuery<Skill, AxiosError>({
		queryKey: ["skill", skill_id],
		queryFn: async (ctx: QueryFunctionContext) => {
			const [_key, skill_id] = ctx.queryKey as [string, string];
			return await GetSkillById(skill_id);
		}
	});
};

export default useGetSkillById;
