import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import useGetSkills from "@/api/hooks/skills/useGetSkills";

const useDebouncedSKills = (searchInput?: string, delay = 300) => {
	const [debouncedSearch, setDebouncedSearch] = useState(searchInput);

	useEffect(() => {
		const handler = debounce(() => {
			setDebouncedSearch(searchInput);
		}, delay);

		handler();

		return () => {
			handler.cancel();
		};
	}, [searchInput, delay]);

	const query = useGetSkills(debouncedSearch);

	return query;
};

export default useDebouncedSKills;
