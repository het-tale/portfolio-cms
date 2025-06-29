import DeleteResume from "@/api/services/resume/delete-resume";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

export default function useDeleteProject() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	useMutation({
		mutationFn: async () => {
			try {
				return await DeleteResume();
			} catch (err) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data?.detail || "Bad Request");
				}
				throw err;
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["resume"] });
			const message = "Resume Deleted successfully";
			toast.success(message);
			navigate({ to: "/resume" });
		},
		onError: (err) => {
			const message =
				err instanceof Error
					? err.message
					: "Resume Deletion failed. Please try again.";
			toast.error(message);
		}
	});
}
