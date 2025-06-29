import client from "@/api/axios";

export default async function UploadResume(resume_file: FormData) {
	const resume = await client.post("/resume/upload_resume", resume_file, {
		headers: { "Content-Type": "multipart/form-data" }
	});
	return resume.data;
}
