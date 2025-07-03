export interface AuthData {
	username: string;
	password: string;
}

export interface User {
	user_id: string;
	email: string;
	username: string;
}

export interface AuthContext {
	isAuthenticated: boolean;
	user: User | undefined;
}

export interface AuthContextType {
	isAuthenticated: boolean;
	user: User | undefined;
	isLoading: boolean;
	error: unknown;
	refetch: () => void;
	logout: () => void;
	logoutIsPending: boolean;
}
