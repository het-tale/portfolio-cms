import type { Skill } from "@/types/skill";
import { TableCell, TableRow } from "@/components/ui/table";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import { Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import useDeleteSkill from "@/api/hooks/skills/useDeleteSkill";

interface SkillTableProps {
	skill: Skill;
}
export default function SkillTable({ skill }: SkillTableProps) {
	const { deleteSkill } = useDeleteSkill();
	const handleDeleteSkill = () => {
		console.log("skill deleteed");
		deleteSkill({ skill_id: skill?.skill_id! });
	};
	return (
		<TableRow key={skill.name}>
			<TableCell className="font-medium">{skill.name}</TableCell>
			<TableCell>{skill.category}</TableCell>
			<TableCell>{skill.years_of_experience}</TableCell>
			<TableCell className="">
				<div className="flex gap-2">
					<Link href={`/skills/edit/${skill.skill_id}`} to={"."}>
						<div className="rounded-full bg-violet-600 w-8 h-8 text-white p-1">
							<Pencil />
						</div>
					</Link>
					<div className="rounded-full bg-red-700 w-8 h-8 text-white p-1">
						<Dialog>
							<DialogTrigger className="cursor-pointer">
								<Trash />
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Are you absolutely sure?</DialogTitle>
									<DialogDescription>
										This action cannot be undone. This will permanently delete
										your skill and remove your data from our servers.
									</DialogDescription>
								</DialogHeader>
								<DialogFooter>
									<DialogClose asChild>
										<Button variant="outline">Cancel</Button>
									</DialogClose>
									<DialogClose asChild>
										<Button type="submit" onClick={handleDeleteSkill}>
											Confirm
										</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</div>
				</div>
			</TableCell>
		</TableRow>
	);
}
