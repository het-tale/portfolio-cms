import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { type ReactElement } from "react";
export default function SearchFilter({
	toBeSearched,
	filter,
	setSearchTerm
}: {
	toBeSearched: string;
	filter: ReactElement;
	setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
	return (
		<div className="flex w-full gap-4 p-8">
			<div className="flex flex-2 border-2 rounded-md">
				<Search color="gray" className="mt-2 ml-2" />
				<Input
					type="search"
					placeholder={`Search ${toBeSearched}...`}
					className="border-none focus-visible:ring-0 focus-visible:border-none outline-none focus-visible:outline-none"
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			{filter}
		</div>
	);
}
