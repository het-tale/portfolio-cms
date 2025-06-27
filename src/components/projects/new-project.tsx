import { Save, X } from "lucide-react";
import Layout from "../layout/layout";
import { Button } from "../ui/button";
import { useNavigate } from "@tanstack/react-router";
import NewProjectForm, {
	type NewProjectFormRef,
	type NewProjectFormValues
} from "./new-project-form";
import { useRef } from "react";

export default function NewProject() {
	const formRef = useRef<NewProjectFormRef>(null);

	const handleSaveClick = () => {
		formRef.current?.submitForm();
	};

	const handleSubmit = (data: NewProjectFormValues) => {
		console.log("Form submitted:", data);
		// To Do: Add mutation or API call here
	};
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
			<Button
				className="flex bg-blue-700 hover:bg-blue-500 cursor-pointer"
				onClick={handleSaveClick}
			>
				<Save />
				<span>Save Project</span>
			</Button>
		</div>
	);
	return (
		<Layout
			children={<NewProjectForm ref={formRef} onSubmit={handleSubmit} />}
			title="New Project"
			action={action}
		/>
	);
}
