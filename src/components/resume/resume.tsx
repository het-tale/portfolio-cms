import { Download, Trash, Upload } from "lucide-react";
import Layout from "../layout/layout";
import { Button } from "../ui/button";
import useGetResume from "@/api/hooks/resume/useGetResume";

export default function Resume() {
	const { data } = useGetResume();
	const action = (
		<div className="flex gap-4">
			<Button className="flex" variant={"destructive"}>
				<Trash />
				<span>Delete Resume</span>
			</Button>
			<Button className="flex border" variant={"outline"}>
				<Download />
				<span>Download</span>
			</Button>
			<Button className="flex bg-blue-700 text-white" variant={"ghost"}>
				<Upload />
				<span>Upload New Resume</span>
			</Button>
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
