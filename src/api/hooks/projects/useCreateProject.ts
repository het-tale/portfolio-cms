import CreateProject from "@/api/services/projects/create-project";
import type { Project } from "@/types/project";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

export default function useCreateProject() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: async (project: Project) => {
			try {
				return await CreateProject(project);
			} catch (err) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data?.detail || "Invalid credentials");
				}
				throw err;
			}
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["project"] });
			toast.success(data.message);
			navigate({ to: "/app/projects" });
		},
		onError: (err) => {
			const message =
				err instanceof Error
					? err.message
					: "Project Creation failed. Please try again.";
			toast.error(message);
		}
	});
	return {
		mutate
	};
}
