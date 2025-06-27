import { Save, X } from "lucide-react";
import Layout from "../layout/layout";
import { Button } from "../ui/button";
import { useNavigate } from "@tanstack/react-router";
import NewProjectForm from "./new-project-form";

export default function NewProject() {
	const navigate = useNavigate();
	const action = (
		<div className="flex gap-4">
			<Button
				className="flex bg-transparent text-black border hover:bg-transparent cursor-pointer"
				onClick={() => {
					navigate({ to: "/projects" });
				}}
			>
				<X />
				<span>Cancel</span>
			</Button>
			<Button className="flex bg-blue-700 hover:bg-blue-500 cursor-pointer">
				<Save />
				<span>Save Project</span>
			</Button>
		</div>
	);
	return (
		<Layout children={<NewProjectForm />} title="New Project" action={action} />
	);
}
