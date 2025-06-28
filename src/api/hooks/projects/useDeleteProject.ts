import DeleteProject from "@/api/services/projects/delete-project";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

export default function useDeleteProject() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: async ({ project_id }: { project_id: string }) => {
			try {
				return await DeleteProject(project_id);
			} catch (err) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data?.detail || "Invalid credentials");
				}
				throw err;
			}
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["project"] });
			const message = data.message || "Project Deleted successfully";
			toast.success(message);
			navigate({ to: "/projects" });
		},
		onError: (err) => {
			const message =
				err instanceof Error
					? err.message
					: "Project Deletion failed. Please try again.";
			toast.error(message);
		}
	});
	return {
		deleteProject: mutate
	};
}
