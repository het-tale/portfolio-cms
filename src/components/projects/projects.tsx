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
	return (
		<Layout
			children={
				<div className="flex flex-col">
					<SearchFilter
						toBeSearched="projects"
						filter={
							<Select>
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
						<ProjectPreview />
						<ProjectPreview />
						<ProjectPreview />
					</div>
				</div>
			}
			title="Projects"
			action={action}
		/>
	);
}
