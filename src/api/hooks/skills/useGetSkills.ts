import GetSkills from "@/api/services/skills/get-skills";
import type { Skill } from "@/types/skill";
import { useQuery, type QueryFunctionContext } from "@tanstack/react-query";

const useGetSkills = (search?: string) => {
	const { data, isPending } = useQuery<Skill[]>({
		queryKey: ["skills", search],
		queryFn: async (ctx: QueryFunctionContext) => {
			const [_key, searchQuery = ""] = ctx.queryKey as [string, string?];
			return await GetSkills(searchQuery);
		}
	});
	return {
		data,
		isPending
	};
};

export default useGetSkills;
