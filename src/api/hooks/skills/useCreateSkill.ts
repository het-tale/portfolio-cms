import CreateSkill from "@/api/services/skills/create-skill";
import type { Skill } from "@/types/skill";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

export default function useCreateSkill() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: async (skill: Skill) => {
			try {
				return await CreateSkill(skill);
			} catch (err) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data?.detail || "Invalid credentials");
				}
				throw err;
			}
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["skill"] });
			toast.success(data.message);
			navigate({ to: "/app/skills" });
		},
		onError: (err) => {
			const message =
				err instanceof Error
					? err.message
					: "Skill Creation failed. Please try again.";
			toast.error(message);
		}
	});
	return {
		createSkill: mutate
	};
}
