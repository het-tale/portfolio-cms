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
			}
			title="Projects"
			action={action}
		/>
	);
}
