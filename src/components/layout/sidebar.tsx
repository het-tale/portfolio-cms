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
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

export default function Sidebar() {
	const { logout, logoutIsPending } = useAuth();
	const navigation = [
		{
			title: "Dashboard",
			href: "/app/dashboard",
			icon: <LayoutDashboard width={40} />
		},
		{
			title: "Projects",
			href: "/app/projects",
			icon: <FolderDot />
		},
		{
			title: "Blog Posts",
			href: "/app/posts",
			icon: <FileText />
		},
		{
			title: "Skills",
			href: "/app/skills",
			icon: <Award />
		},
		{
			title: "Resume",
			href: "/app/resume",
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
				disabled={logoutIsPending}
			>
				<User />
				<span className="font-semibold text-md">Logout</span>
			</Button>
		</div>
	);
}
