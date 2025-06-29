import UpdateSkill from "@/api/services/skills/update-skill";
import type { Skill } from "@/types/skill";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

export default function useUpdateSkill() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: async ({
			skill_id,
			skill
		}: {
			skill_id: string;
			skill: Skill;
		}) => {
			try {
				return await UpdateSkill(skill_id, skill);
			} catch (err) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data?.detail || "Invalid credentials");
				}
				throw err;
			}
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["skill"] });
			const message = data.message || "Skill Updated successfully";
			toast.success(message);
			navigate({ to: "/skills" });
		},
		onError: (err) => {
			const message =
				err instanceof Error
					? err.message
					: "Skill Update failed. Please try again.";
			toast.error(message);
		}
	});
	return {
		updateSkill: mutate
	};
}
