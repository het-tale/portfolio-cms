import { Card, CardHeader } from "@/components/ui/card";
import type { StatsType } from "@/types/stats";

export default function CardStats({ title, icon, counter }: StatsType) {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader className="flex items-center">
				{icon}
				<div className="flex flex-col">
					<span className="font-semibold text-gray-500">{title}</span>
					{counter && <span className="font-bold text-2xl">{counter}</span>}
				</div>
			</CardHeader>
		</Card>
	);
}
