import { Award, FileText, FolderDot, Plus, StickyNote } from "lucide-react";

import CardStats from "./card-stats";
import useGetProjects from "@/api/hooks/projects/useGetProjects";
import useGetSkills from "@/api/hooks/skills/useGetSkills";
import useGetResume from "@/api/hooks/resume/useGetResume";
import Layout from "../layout/layout";

export default function Dashboard() {
	const { data: projects } = useGetProjects();
	const { data: skills } = useGetSkills();
	const { data: resume } = useGetResume();
	const stats = [
		{
			title: "Projects",
			counter: projects?.length,
			icon: (
				<FolderDot
					className="bg-pink-500 w-12 h-12 rounded p-2"
					color="white"
				/>
			)
		},
		{
			title: "Blog Posts",
			counter: 8,
			icon: (
				<FileText className="bg-blue-500 w-12 h-12 rounded p-2" color="white" />
			)
		},
		{
			title: "Skills",
			counter: skills?.length,
			icon: (
				<Award className="bg-green-500 w-12 h-12 rounded p-2" color="white" />
			)
		},
		{
			title: "Resume Views",
			counter: resume?.views_counter,
			icon: (
				<StickyNote
					className="bg-purple-500 w-12 h-12 rounded p-2"
					color="white"
				/>
			)
		}
	];
	const actions = [
		{
			title: "Add New Project",
			icon: <Plus className="bg-pink-100 rounded-full w-8 h-8" color="pink" />,
			href: ""
		},
		{
			title: "Add New Blog Post",
			icon: <Plus className="bg-blue-200 rounded-full w-8 h-8" color="blue" />,
			href: ""
		},
		{
			title: "Add New Skill",
			icon: (
				<Plus className="bg-green-200 rounded-full w-8 h-8" color="green" />
			),
			href: ""
		},
		{
			title: "Update Resume",
			icon: (
				<StickyNote
					className="bg-purple-200 rounded-full w-8 h-8"
					color="purple"
				/>
			),
			href: ""
		}
	];
	const children = (
		<>
			<div className="grid grid-cols-4 gap-2 mt-4 p-8">
				{stats.map((stat) => {
					return (
						<CardStats
							title={stat.title}
							icon={stat.icon}
							counter={stat.counter}
						/>
					);
				})}
			</div>
			<h2 className="font-semibold px-8 text-xl">Quick Actions</h2>
			<div className="grid grid-cols-4 gap-2 mt-4 p-8">
				{actions.map((action) => {
					return <CardStats title={action.title} icon={action.icon} />;
				})}
			</div>
		</>
	);
	return (
		<Layout
			children={children}
			title="Dashboard"
			action={<span>Welcome back, Admin</span>}
		/>
	);
}
