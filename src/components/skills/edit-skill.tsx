import { useParams } from "@tanstack/react-router";
import useGetSkillById from "@/api/hooks/skills/useGetSkillById";
import NewSkill from "./new-skill";

export default function EditSkill() {
	const { id } = useParams({ from: "/app/skills/edit/$id" });

	console.log("iddd", id);
	const { data: skill, isLoading } = useGetSkillById(id);
	if (isLoading)
		return <div className="ml-160 font-bold text-3xl mt-72">Loading...</div>;

	return <NewSkill skill={skill} />;
}
