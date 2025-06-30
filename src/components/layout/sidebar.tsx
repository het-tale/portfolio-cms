import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Link, useRouterState } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import {
	Award,
	FileText,
	FolderDot,
	LayoutDashboard,
	StickyNote,
	User
} from "lucide-react";
import useLogout from "@/api/hooks/useLogout";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Sidebar() {
	const { logout, isPending } = useLogout();
	const navigation = [
		{
			title: "Dashboard",
			href: "/dashboard",
			icon: <LayoutDashboard width={40} />
		},
		{
			title: "Projects",
			href: "/projects",
			icon: <FolderDot />
		},
		{
			title: "Blog Posts",
			href: "/posts",
			icon: <FileText />
		},
		{
			title: "Skills",
			href: "/skills",
			icon: <Award />
		},
		{
			title: "Resume",
			href: "/resume",
			icon: <StickyNote />
		}
	];
	const location = useRouterState({
		select: (state) => state.location.pathname
	});

	return (
		<div className="flex flex-col bg-white p-4 justify-between h-screen fixed">
			<div className="flex flex-col w-full">
				<h1 className="font-bold text-3xl mb-4">PortfolioHub</h1>
				<Separator />
				<NavigationMenu className="w-full">
					<NavigationMenuList className="flex-col w-full">
						{navigation.map((nav) => {
							return (
								<NavigationMenuItem
									className={cn(
										location === nav.href
											? "bg-gray-100 hover:bg-gray-700 text-black rounded-md"
											: "",
										"w-full hover:bg-transparent"
									)}
								>
									<NavigationMenuLink asChild>
										<Link href={nav.href} to={"."}>
											<div className="flex w-full gap-2 items-center mb-2">
												{nav.icon}
												<span className="font-semibold text-md">
													{nav.title}
												</span>
											</div>
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							);
						})}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<Button
				className="flex items-center gap-2 cursor-pointer bg-blue-600"
				onClick={() => {
					logout();
				}}
				disabled={isPending}
			>
				<User />
				<span className="font-semibold text-md">Logout</span>
			</Button>
		</div>
	);
}
