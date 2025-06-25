import type { AuthData } from "@/types/auth";
import client from "../axios";

const login = async (authData: AuthData) => {
	const formData = new URLSearchParams();
	formData.append("username", authData.username);
	formData.append("password", authData.password);
	const authResponseData = await client.post("/login", formData, {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	});
	return authResponseData.data;
};

export default login;
