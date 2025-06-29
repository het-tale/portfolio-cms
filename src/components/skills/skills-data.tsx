import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table";
import type { Skill } from "@/types/skill";
import { Link } from "@tanstack/react-router";
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
					<TableHead>Years</TableHead>
					<TableHead className="">Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{skillData.map((skill) => (
					<TableRow key={skill.name}>
						<TableCell className="font-medium">{skill.name}</TableCell>
						<TableCell>{skill.category}</TableCell>
						<TableCell>{skill.years_of_experience}</TableCell>
						<TableCell className="">
							<div className="flex gap-2">
								<Link href={``} to={"."}>
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
											<form>
												<DialogHeader>
													<DialogTitle>Are you absolutely sure?</DialogTitle>
													<DialogDescription>
														This action cannot be undone. This will permanently
														delete your skill and remove your data from our
														servers.
													</DialogDescription>
												</DialogHeader>
												<DialogFooter>
													<DialogClose asChild>
														<Button variant="outline">Cancel</Button>
													</DialogClose>
													<DialogClose asChild>
														<Button type="submit">Confirm</Button>
													</DialogClose>
												</DialogFooter>
											</form>
										</DialogContent>
									</Dialog>
								</div>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
