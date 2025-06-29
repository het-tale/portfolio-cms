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
import { useEffect, useState } from "react";
import SkillsData from "./skills-data";
import useDebouncedSKills from "@/hooks/useDebouncedSkill";
import type { Skill } from "@/types/skill";

export default function Skills() {
	const navigate = useNavigate();
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
	const [searchTerm, setSearchTerm] = useState<string | undefined>("");
	const { data: skills } = useDebouncedSKills(searchTerm);
	const [filteredData, setFilteredData] = useState<Skill[]>([]);
	useEffect(() => {
		if (skills) {
			setFilteredData(skills);
		}
	}, [skills]);
	const handleCategoryChange = (category: string) => {
		console.log("Category", category);
		if (!skills) return;
		const result = skills.filter((project) => project.category === category);
		setFilteredData(result);
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
					<SkillsData skillData={filteredData} />
				</div>
			}
			title="Skills"
			action={action}
		/>
	);
}
