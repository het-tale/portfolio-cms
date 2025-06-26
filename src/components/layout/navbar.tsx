import type NavbarType from "@/types/navbar";
import { Separator } from "../ui/separator";

export default function Navbar({ title, action }: NavbarType) {
	return (
		<div className="flex flex-col w-full">
			<div className="w-full flex justify-between p-8">
				<h2 className="font-bold text-3xl">{title}</h2>
				{action}
			</div>
			<Separator />
		</div>
	);
}
