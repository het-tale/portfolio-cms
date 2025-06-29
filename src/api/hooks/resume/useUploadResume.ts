import UploadResume from "@/api/services/resume/upload-resume";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";
import { toast } from "sonner";

export default function useUploadResume() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: async (resume_file: FormData) => {
			try {
				return await UploadResume(resume_file);
			} catch (err) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data?.detail || "Invalid credentials");
				}
				throw err;
			}
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["resume"] });
			const message = data.message || "Resume uploaded successfully";
			toast.success(message);
			navigate({ to: "/resume" });
		},
		onError: (err) => {
			const message =
				err instanceof Error
					? err.message
					: "Resume Upload failed. Please try again.";
			toast.error(message);
		}
	});
	return {
		upload: mutate
	};
}
