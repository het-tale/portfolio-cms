import { Plus } from "lucide-react";
import Layout from "../layout/layout";
import { Button } from "../ui/button";
import { useNavigate } from "@tanstack/react-router";
import SearchFilter from "../layout/search-filter";
import {
	SelectContent,
	SelectItem,
	Select,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import ProjectPreview from "./project-preview";
import type { ProjectResponse } from "@/types/project";
import { useEffect, useState } from "react";
import useDebouncedProjects from "@/hooks/useDebouncedSearch";
export default function Projects() {
	const navigate = useNavigate();
	const action = (
		<Button
			className="flex bg-blue-700 hover:bg-blue-500"
			onClick={() => {
				navigate({ to: "/projects/new" });
			}}
		>
			<Plus />
			<span>New Project</span>
		</Button>
	);
	const [searchTerm, setSearchTerm] = useState<string | undefined>("");
	const { data: projects } = useDebouncedProjects(searchTerm);
	const [filteredData, setFilteredData] = useState<ProjectResponse[]>([]);
	useEffect(() => {
		if (projects) {
			setFilteredData(projects);
		}
	}, [projects]);

	const handleStatusChange = (status: string) => {
		if (!projects) return;
		const result = projects.filter((project) => project.status === status);
		setFilteredData(result);
	};
	console.log("Search", searchTerm);
	return (
		<Layout
			children={
				<div className="flex flex-col">
					<SearchFilter
						setSearchTerm={setSearchTerm}
						toBeSearched="projects"
						filter={
							<Select onValueChange={handleStatusChange}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Project status" />
								</SelectTrigger>

								<SelectContent>
									<SelectItem value="planning">Planning</SelectItem>
									<SelectItem value="in_progress">In Progress</SelectItem>
									<SelectItem value="completed">Completed</SelectItem>
								</SelectContent>
							</Select>
						}
					/>
					<div className="ml-8 grid grid-cols-3 gap-2 mr-6">
						{filteredData?.map((project) => {
							return <ProjectPreview project={project} />;
						})}
					</div>
				</div>
			}
			title="Projects"
			action={action}
		/>
	);
}
