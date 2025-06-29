import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table";
import type { Skill } from "@/types/skill";

import SkillTable from "./skill-table";

interface SKillsDataProps {
	skillData: Skill[];
}
export default function SkillsData({ skillData }: SKillsDataProps) {
	return (
		<Table className="mx-12">
			<TableHeader>
				<TableRow>
					<TableHead className="">Skill</TableHead>
					<TableHead>Category</TableHead>
					<TableHead>Years Of Experience</TableHead>
					<TableHead className="">Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{skillData.map((skill) => (
					<SkillTable skill={skill} />
				))}
			</TableBody>
		</Table>
	);
}
