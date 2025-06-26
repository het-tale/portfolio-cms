import { Award, FileText, FolderDot, Plus, StickyNote } from "lucide-react";
import Navbar from "../layout/navbar";
import Sidebar from "../layout/sidebar";
import CardStats from "./card-stats";

export default function Dashboard() {
	const stats = [
		{
			title: "Projects",
			counter: 12,
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
			counter: 15,
			icon: (
				<Award className="bg-green-500 w-12 h-12 rounded p-2" color="white" />
			)
		},
		{
			title: "Resume Views",
			counter: 20,
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
			icon: <Plus className="bg-green-200 rounded-full w-8 h-8" color="green" />,
			href: ""
		},
		{
			title: "Update Resume",
			icon: <StickyNote className="bg-purple-200 rounded-full w-8 h-8" color="purple" />,
			href: ""
		}
	];
	return (
		<div className="flex bg-gray-100 h-full h-screen w-full">
			<Sidebar />
			<div className="flex flex-col w-full">
				<Navbar title="Dashboard" action={<span>Welcome back, Admin</span>} />
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
			</div>
		</div>
	);
}
