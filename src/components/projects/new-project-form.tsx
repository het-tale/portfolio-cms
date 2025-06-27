import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
	title: z.string().min(1),
	description: z.string(),
	project_img: z.string().min(1),
	project_status: z.string(),
	github_link: z.string().min(1),
	website_link: z.string().min(1)
});

export default function NewProjectForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema)
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			console.log(values);
			toast(
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(values, null, 2)}</code>
				</pre>
			);
		} catch (error) {
			console.error("Form submission error", error);
			toast.error("Failed to submit the form. Please try again.");
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 max-w-3xl mx-6 py-4"
			>
				<FormField
					control={form.control}
					name="title"
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
							<FormControl>
								<Input
									placeholder="Provide project image"
									type="file"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="project_status"
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
									<SelectItem value="planning">planning</SelectItem>
									<SelectItem value="in progress">in progress</SelectItem>
									<SelectItem value="completed">completed</SelectItem>
								</SelectContent>
							</Select>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="github_link"
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
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
