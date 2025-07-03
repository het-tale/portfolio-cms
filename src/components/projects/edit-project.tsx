import { useParams } from "@tanstack/react-router";
import NewProject from "./new-project";
import useGetProjectById from "@/api/hooks/projects/useGetProjectById";

export default function EditProject() {
	const { id } = useParams({ from: "/app/projects/edit/$id" });

	const { data: project, isLoading } = useGetProjectById(id);
	if (isLoading)
		return <div className="ml-160 font-bold text-3xl mt-72">Loading...</div>;

	return <NewProject project={project} />;
}
