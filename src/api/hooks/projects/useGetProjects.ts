import { useQuery } from "@tanstack/react-query";
import GetProjects from "../../services/projects/get-projects";
import type { Project } from "@/types/project";
import type { AxiosError } from "axios";

const useGetProjects = () => {
	const { data, error, isError } = useQuery<Project[], AxiosError>({
		queryKey: ["projects"],
		queryFn: GetProjects
	});
	return {
		data,
		error,
		isError
	};
};

export default useGetProjects;
