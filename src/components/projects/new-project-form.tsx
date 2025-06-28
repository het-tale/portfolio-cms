import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import type { ProjectResponse, Status } from "@/types/project";

const ProjectStatus = {
	PLANNING: "planning",
	IN_PROGRESS: "in_progress",
	COMPLETED: "completed"
} as const;

type ProjectStatus = keyof typeof ProjectStatus;

const formSchema = z.object({
	title: z.string().min(1, "Title is required"),
	description: z.string(),
	project_img: z
		.custom<FileList>()
		.refine(
			(fileList) =>
				fileList instanceof FileList
					? fileList.length === 0 || fileList.length > 0
					: true,
			{
				message: "Invalid file input"
			}
		)
		.optional(),
	github_link: z.string().min(1),
	website_link: z.string().min(1),
	project_status: z.nativeEnum(ProjectStatus)
});

export type NewProjectFormValues = z.infer<typeof formSchema>;

export interface NewProjectFormRef {
	submitForm: () => void;
}

const NewProjectForm = forwardRef<
	NewProjectFormRef,
	{ onSubmit: (data: NewProjectFormValues) => void; project?: ProjectResponse }
>(({ onSubmit, project }, ref) => {
	const form = useForm<NewProjectFormValues>({
		resolver: zodResolver(formSchema)
	});

	useImperativeHandle(ref, () => ({
		submitForm: () => {
			form.handleSubmit(handleInternalSubmit)();
		}
	}));

	const handleInternalSubmit = (values: NewProjectFormValues) => {
		try {
			onSubmit(values);
		} catch (error) {}
	};
	return (
		<Form {...form}>
			<form className="space-y-8 max-w-3xl mx-6 py-4">
				<FormField
					control={form.control}
					name="title"
					defaultValue={project?.title}
					render={({ field }) => (
						<FormItem>
							<div className="flex">
								<FormLabel>Project Title</FormLabel>
								<span className="text-red-500">*</span>
							</div>
							<FormControl>
								<Input placeholder="project title" type="text" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					defaultValue={project?.description}
					render={({ field }) => (
						<FormItem>
							<div className="flex">
								<FormLabel>Description</FormLabel>
								<span className="text-red-500">*</span>
							</div>
							<FormControl>
								<Textarea
									placeholder="Tell more about your project"
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="project_img"
					render={({ field }) => (
						<FormItem>
							<div className="flex">
								<FormLabel>Project Image</FormLabel>
								<span className="text-red-500">*</span>
							</div>
							{project?.illustration && (
								<img
									src={project.illustration}
									alt="Project"
									className="h-24 mb-2 rounded"
								/>
							)}
							<FormControl>
								<Input
									placeholder="Provide project image"
									type="file"
									onChange={(e) => field.onChange(e.target.files)}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="project_status"
					defaultValue={project?.status as Status}
					render={({ field }) => (
						<FormItem>
							<div className="flex">
								<FormLabel>Status</FormLabel>
								<span className="text-red-500">*</span>
							</div>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl className="w-full">
									<SelectTrigger>
										<SelectValue placeholder="Select your project status" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="planning">Planning</SelectItem>
									<SelectItem value="in_progress">In Progress</SelectItem>
									<SelectItem value="completed">Completed</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="github_link"
					defaultValue={project?.github_link}
					render={({ field }) => (
						<FormItem>
							<div className="flex">
								<FormLabel>Github Link</FormLabel>
								<span className="text-red-500">*</span>
							</div>
							<FormControl>
								<Input
									placeholder="link to project repository"
									type="text"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="website_link"
					defaultValue={project?.website_link}
					render={({ field }) => (
						<FormItem>
							<div className="flex">
								<FormLabel>Website Link</FormLabel>
								<span className="text-red-500">*</span>
							</div>
							<FormControl>
								<Input placeholder="project website" type="text" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
});

export default NewProjectForm;
