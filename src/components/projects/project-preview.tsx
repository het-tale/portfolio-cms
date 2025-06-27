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

export default function ProjectPreview() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					<img src="/logo192.png" />
				</CardTitle>
			</CardHeader>
			<CardContent>
				<h2 className="text-xl font-bold">E-commerce Website</h2>
				<p>
					A fully functional e-commerce platform built with React and Node.js
				</p>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Badge className={cn("bg-blue-200 text-blue-500")}>Completed</Badge>
				<div className="flex gap-2">
					<div className="rounded-full bg-violet-600 w-8 h-8 text-white p-1">
						<Pencil />
					</div>
					<div className="rounded-full bg-red-700 w-8 h-8 text-white p-1">
						<Trash />
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
