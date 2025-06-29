import client from "@/api/axios";
import { toast } from "sonner";

const GetSkills = async (search?: string) => {
	try {
		const skills = await client.get(`/skill/get_skills_list?search=${search}`);
		return skills.data;
	} catch (err) {
		const message =
			err instanceof Error
				? err.message
				: "Something went wrong. Please try again.";
		toast.error(message);
	}
};

export default GetSkills;
