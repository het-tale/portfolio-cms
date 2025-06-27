import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import useGetProjects from "@/api/hooks/projects/useGetProjects"; // your existing hook

const useDebouncedProjects = (searchInput?: string, delay = 300) => {
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

	const query = useGetProjects(debouncedSearch);

	return query;
};

export default useDebouncedProjects;
