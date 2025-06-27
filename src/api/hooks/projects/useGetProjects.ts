import { useQuery } from "@tanstack/react-query";
import type { QueryFunctionContext } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import GetProjects from "../../services/projects/get-projects";
import type { ProjectResponse } from "@/types/project";

const useGetProjects = (search?: string) => {
	return useQuery<ProjectResponse[], AxiosError>({
		queryKey: ["projects", search],
		queryFn: async (ctx: QueryFunctionContext) => {
			const [_key, searchQuery = ""] = ctx.queryKey as [string, string?];
			return await GetProjects(searchQuery);
		}
	});
};

export default useGetProjects;
