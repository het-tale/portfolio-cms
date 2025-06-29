import { Download, Trash, Upload } from "lucide-react";
import Layout from "../layout/layout";
import { Button } from "../ui/button";
import useGetResume from "@/api/hooks/resume/useGetResume";
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
import UploadResumeForm from "./resume-form";
import DeleteResume from "@/api/services/resume/delete-resume";
export default function Resume() {
	const { data } = useGetResume();
	const handleDelete = () => {
		console.log("resume deleteed");
		DeleteResume();
	};
	const action = (
		<div className="flex gap-4">
			<Dialog>
				<DialogTrigger className="cursor-pointer">
					<Button className="flex" variant={"destructive"}>
						<Trash />

						<span>Delete Resume</span>
					</Button>
				</DialogTrigger>
				<DialogContent>
					<form onSubmit={handleDelete}>
						<DialogHeader>
							<DialogTitle>Are you absolutely sure?</DialogTitle>
							<DialogDescription>
								This action cannot be undone. This will permanently delete your
								resume and remove your data from our servers.
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

			<Button className="flex border" variant={"outline"}>
				<Download />
				<span>Download</span>
			</Button>

			<Dialog>
				<DialogTrigger className="cursor-pointer">
					<Button className="flex bg-blue-700 text-white" variant={"ghost"}>
						<Upload />
						<span>Upload New Resume</span>
					</Button>
				</DialogTrigger>
				<DialogContent>
					<UploadResumeForm />
				</DialogContent>
			</Dialog>
		</div>
	);
	return (
		<Layout
			title="Resume"
			children={
				<iframe
					src={data?.resume_link}
					title="PDF Preview"
					width="100%"
					height="600px"
					style={{ border: "none" }}
				/>
			}
			action={action}
		/>
	);
}
