import { Save, X } from "lucide-react";
import Layout from "../layout/layout";
import { Button } from "../ui/button";
import { useNavigate } from "@tanstack/react-router";
import NewProjectForm, {
	type NewProjectFormRef,
	type NewProjectFormValues
} from "./new-project-form";
import { useRef } from "react";
import useCreateProject from "@/api/hooks/projects/useCreateProject";
import type { ProjectResponse, ProjectStatus } from "@/types/project";

export type NewProjectProps = {
	project?: ProjectResponse;
};

export default function NewProject({ project }: NewProjectProps) {
	const formRef = useRef<NewProjectFormRef>(null);

	const handleSaveClick = () => {
		formRef.current?.submitForm();
	};
	const { mutate } = useCreateProject();
	const handleSubmit = (data: NewProjectFormValues) => {
		console.log("Form submitted:", data);
		mutate({
			...data,
			project_status: data.project_status as ProjectStatus,
			project_img: data.project_img
		});
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
			children={
				<NewProjectForm
					ref={formRef}
					onSubmit={handleSubmit}
					project={project}
				/>
			}
			title={project ? "Edit Project" : "New Project"}
			action={action}
		/>
	);
}
