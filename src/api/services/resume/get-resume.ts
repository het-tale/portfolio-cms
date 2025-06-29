import client from "@/api/axios";
import { toast } from "sonner";

const GetResume = async () => {
	try {
		const resume = await client.get("/resume/get_resume");
		return resume.data;
	} catch (err) {
		const message =
			err instanceof Error
				? err.message
				: "Something went wrong. Please try again.";
		toast.error(message);
	}
};

export default GetResume;
