import GetSkills from "@/api/services/skills/get-skills";
import type { Skill } from "@/types/skill";
import { useQuery } from "@tanstack/react-query";

const useGetSkills = () => {
	const { data, isPending } = useQuery<Skill[]>({
		queryKey: ["skills"],
		queryFn: GetSkills
	});
	return {
		data,
		isPending
	};
};

export default useGetSkills;
