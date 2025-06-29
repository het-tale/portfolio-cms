import DeleteSkill from "@/api/services/skills/delete-skill";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

export default function useDeleteSkill() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: async ({ skill_id }: { skill_id: string }) => {
			try {
				return await DeleteSkill(skill_id);
			} catch (err) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data?.detail || "Invalid credentials");
				}
				throw err;
			}
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["skill"] });
			const message = data.message || "SKill Deleted successfully";
			toast.success(message);
			navigate({ to: "/skills" });
		},
		onError: (err) => {
			const message =
				err instanceof Error
					? err.message
					: "Skill Deletion failed. Please try again.";
			toast.error(message);
		}
	});
	return {
		deleteSkill: mutate
	};
}
