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
import { useState } from "react";

export default function Skills() {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState<string | undefined>("");
	const action = (
		<Button
			className="flex bg-blue-700 hover:bg-blue-500"
			onClick={() => {
				navigate({ to: "/skills/new" });
			}}
		>
			<Plus />
			<span>New Skill</span>
		</Button>
	);
	const handleCategoryChange = (category: string) => {
		console.log("Category", category);
	};
	return (
		<Layout
			children={
				<div className="flex flex-col">
					<SearchFilter
						setSearchTerm={setSearchTerm}
						toBeSearched="skills"
						filter={
							<Select onValueChange={handleCategoryChange}>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Skill Category" />
								</SelectTrigger>

								<SelectContent>
									<SelectItem value="programming_languages">
										Programming Languages
									</SelectItem>
									<SelectItem value="frontend">Frontend</SelectItem>
									<SelectItem value="backend">Backend</SelectItem>
									<SelectItem value="database">Database</SelectItem>
									<SelectItem value="devops">Devops</SelectItem>
									<SelectItem value="tools">Tools</SelectItem>
								</SelectContent>
							</Select>
						}
					/>
				</div>
			}
			title="Skills"
			action={action}
		/>
	);
}
