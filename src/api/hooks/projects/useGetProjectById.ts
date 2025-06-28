import GetProjectById from "@/api/services/projects/get-project-by-id";
import type { ProjectResponse } from "@/types/project";
import { useQuery, type QueryFunctionContext } from "@tanstack/react-query";
import type { AxiosError } from "axios";

const useGetProjectById = (project_id: string) => {
	return useQuery<ProjectResponse, AxiosError>({
		queryKey: ["project", project_id],
		queryFn: async (ctx: QueryFunctionContext) => {
			const [_key, project_id] = ctx.queryKey as [string, string];
			return await GetProjectById(project_id);
		}
	});
};

export default useGetProjectById;
