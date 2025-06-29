import client from "../axios";

const logout = async () => {
	const logoutResponseData = await client.post("/logout", {});
	return logoutResponseData.data;
};

export default logout;
