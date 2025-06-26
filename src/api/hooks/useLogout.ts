import { useMutation } from "@tanstack/react-query";
import logout from "../services/logout";

import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

const useLogout = () => {
	const navigate = useNavigate();
	const { mutate, isPending } = useMutation({
		mutationFn: logout,
		onSuccess: (data) => {
			toast.success(data.message);
			navigate({ to: "/login" });
		},
		onError: (err) => {
			const message =
				err instanceof Error ? err.message : "Logout failed. Please try again.";
			toast.error(message);
		}
	});
	return {
		logout: mutate,
		isPending
	};
};

export default useLogout;
