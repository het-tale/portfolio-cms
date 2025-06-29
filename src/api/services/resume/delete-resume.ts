import client from "@/api/axios";

export default async function DeleteResume() {
	await client.delete("/resume/delete_resume");
}
