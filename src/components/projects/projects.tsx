import { Plus } from "lucide-react";
import Layout from "../layout/layout";
import { Button } from "../ui/button";
import { useNavigate } from "@tanstack/react-router";

export default function Projects() {
	const navigate = useNavigate();
	const action = (
		<Button
			className="flex bg-blue-700 hover:bg-blue-500"
			onClick={() => {
				navigate({ to: "/projects/new" });
			}}
		>
			<Plus />
			<span>New Project</span>
		</Button>
	);
	return <Layout children={<></>} title="Projects" action={action} />;
}
