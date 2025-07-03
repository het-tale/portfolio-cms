import UpdateProject from "@/api/services/projects/update-project";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

export default function useUpdateProject() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: async ({
			project_id,
			project
		}: {
			project_id: string;
			project: FormData;
		}) => {
			try {
				return await UpdateProject(project_id, project);
			} catch (err) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data?.detail || "Invalid credentials");
				}
				throw err;
			}
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["project"] });
			const message = data.message || "Project Updated successfully";
			toast.success(message);
			navigate({ to: "/app/projects" });
		},
		onError: (err) => {
			const message =
				err instanceof Error
					? err.message
					: "Project Update failed. Please try again.";
			toast.error(message);
		}
	});
	return {
		mutate
	};
}
