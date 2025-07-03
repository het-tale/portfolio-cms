import { useMutation, useQueryClient } from "@tanstack/react-query";
import login from "../services/login";
import type { AuthData } from "@/types/auth";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

const useLogin = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { data, mutate, isError, isPending, error } = useMutation({
		mutationFn: async (authData: AuthData) => {
			try {
				return await login(authData);
			} catch (err) {
				if (axios.isAxiosError(err)) {
					throw new Error(err.response?.data?.detail || "Invalid credentials");
				}
				throw err;
			}
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
			toast.success(data.message);
			navigate({ to: "/app/dashboard" });
		},
		onError: (err) => {
			const message =
				err instanceof Error ? err.message : "Login failed. Please try again.";
			toast.error(message);
		}
	});
	return {
		data,
		mutate,
		isError,
		isPending,
		error
	};
};

export default useLogin;
