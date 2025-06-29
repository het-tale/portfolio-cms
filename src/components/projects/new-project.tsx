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
import useUpdateProject from "@/api/hooks/projects/useUpdateProject";

export type NewProjectProps = {
	project?: ProjectResponse;
};

export default function NewProject({ project }: NewProjectProps) {
	const formRef = useRef<NewProjectFormRef>(null);

	const handleSaveClick = () => {
		formRef.current?.submitForm();
	};
	const { mutate } = useCreateProject();
	const { mutate: update } = useUpdateProject();
	const handleSubmit = (data: NewProjectFormValues) => {
		console.log("Form submitted:", data);
		mutate({
			...data,
			project_status: data.project_status as ProjectStatus,
			project_img: data.project_img || new DataTransfer().files
		});
	};
	const handleUpdate = (data: NewProjectFormValues) => {
		console.log("Form updated:", data);
		const formData = new FormData();
		formData.append("title", data.title);
		formData.append("description", data.description);
		formData.append("project_status", data.project_status);
		formData.append("github_link", data.github_link);
		formData.append("website_link", data.website_link);
		if (data.project_img && data.project_img.length > 0) {
			formData.append("project_img", data.project_img[0]);
		}

		update({
			project_id: project?.project_id || "",
			project: formData
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
					onSubmit={project ? handleUpdate : handleSubmit}
					project={project}
				/>
			}
			title={project ? "Edit Project" : "New Project"}
			action={action}
		/>
	);
}
