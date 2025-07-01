import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import GetUser from "../services/get-user";
import type { User } from "@/types/auth";

export default function useGetUser(options?: UseQueryOptions<User>) {
	return useQuery<User>({
		queryKey: ["user"],
		queryFn: GetUser,
		...options
	});
}
