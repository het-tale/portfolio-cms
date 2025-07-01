import client from "../axios";

export default async function GetUser() {
	const user = client.get("/user/me");
	return (await user).data;
}
