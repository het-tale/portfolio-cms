import GetResume from "@/api/services/resume/get-resume";
import type { Resume } from "@/types/resume";
import { useQuery } from "@tanstack/react-query";

const useGetResume = () => {
	const { data, isPending } = useQuery<Resume>({
		queryKey: ["resume"],
		queryFn: GetResume
	});
	return {
		data,
		isPending
	};
};

export default useGetResume;
