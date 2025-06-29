import type { ReactElement } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Layout({
	children,
	title,
	action
}: {
	children: ReactElement;
	title: string;
	action: ReactElement;
}) {
	return (
		<div className="flex bg-gray-100 h-screen w-full">
			<Sidebar />
			<div className="flex flex-col w-full ml-52">
				<Navbar title={title} action={action} />
				{children}
			</div>
		</div>
	);
}
