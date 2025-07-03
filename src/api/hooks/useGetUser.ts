import {
	useQuery,
	type UseQueryOptions,
	type UseQueryResult
} from "@tanstack/react-query";
import GetUser from "../services/get-user";
import type { User } from "@/types/auth";

type QueryKey = ["user"];

export default function useGetUser(
	options?: Omit<
		UseQueryOptions<User, Error, User, QueryKey>,
		"queryKey" | "queryFn"
	>
): UseQueryResult<User, Error> {
	return useQuery<User, Error, User, QueryKey>({
		queryKey: ["user"],
		queryFn: GetUser,
		...options
	});
}
