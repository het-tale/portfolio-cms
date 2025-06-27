import { Pencil, Trash } from "lucide-react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from "../ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ProjectResponse } from "@/types/project";
import { Link } from "@tanstack/react-router";

type ProjectPreviewProps = {
	project: ProjectResponse;
};

export default function ProjectPreview({ project }: ProjectPreviewProps) {
	return (
		<Card>
			<CardHeader className="max-h-64">
				<CardTitle>
					<img
						src={project.illustration}
						className="max-h-56 w-full"
						onError={(e) => {
							const target = e.currentTarget;
							target.onerror = null;
							target.src = "logo192.png";
						}}
					/>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<h2 className="text-xl font-bold">{project.title}</h2>
				<p>{project.description}</p>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Badge
					className={cn(
						project.status === "planning"
							? "bg-blue-200 text-blue-500"
							: "in_progress"
								? "bg-yellow-200 text-yellow-500"
								: "bg-green-200 text-green-500"
					)}
				>
					{project.status}
				</Badge>
				<div className="flex gap-2">
					<Link href={`/projects/edit/${project.project_id}`} to={"."}>
						<div className="rounded-full bg-violet-600 w-8 h-8 text-white p-1">
							<Pencil />
						</div>
					</Link>
					<div className="rounded-full bg-red-700 w-8 h-8 text-white p-1">
						<Trash />
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
