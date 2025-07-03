import useGetUser from "@/api/hooks/useGetUser";
import useLogout from "@/api/hooks/useLogout";
import type { AuthContextType } from "@/types/auth";
import { createContext } from "react";
import { Outlet } from "@tanstack/react-router";

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

export function AuthProvider() {
	const {
		data: user,
		isLoading,
		error,
		refetch
	} = useGetUser({
		retry: false
	});

	const { logout, isPending: logoutIsPending } = useLogout();

	return (
		<AuthContext.Provider
			value={{
				user: user ?? undefined,
				isAuthenticated: Boolean(user),
				isLoading,
				error,
				refetch,
				logout,
				logoutIsPending
			}}
		>
			<Outlet />
		</AuthContext.Provider>
	);
}
