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
import {
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from "../ui/dialog";
import useUploadResume from "@/api/hooks/resume/useUploadResume";
import { useRef } from "react";

const formSchema = z.object({
	resume_file: z
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
});

export default function UploadResumeForm() {
	const closeRef = useRef<HTMLButtonElement>(null);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema)
	});

	const { upload } = useUploadResume();
	function onSubmit(values: z.infer<typeof formSchema>) {
		const formData = new FormData();
		formData.append("resume_file", values.resume_file[0]); // 👈 append the actual file

		try {
			upload(formData);
			if (closeRef.current) {
				closeRef.current.click();
			}
			toast.success("Resume uploaded successfully");
			form.reset();
		} catch (err) {
			console.error(err);
			toast.error("Failed to upload resume");
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 max-w-3xl"
			>
				<DialogHeader>
					<DialogTitle className="mb-4">
						Please Upload Your New Resume
					</DialogTitle>
					<DialogDescription>
						<FormField
							control={form.control}
							name="resume_file"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Resume File</FormLabel>
									<FormControl>
										<Input
											placeholder="Attach your resume"
											type="file"
											onChange={(e) => field.onChange(e.target.files)}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button
							type="submit"
							ref={closeRef}
							className="bg-blue-700 hover:bg-blue-500"
						>
							Upload
						</Button>
					</DialogClose>
				</DialogFooter>
			</form>
		</Form>
	);
}
