import { useState } from "react"
import { searchAirports } from "../api/searchAirports"
import { validateInput } from "../helpers/validators"
import { type TAirport } from "../types/TAirport"

export const useAirportSearch = () => {
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [airports, setAirports] = useState<TAirport[] | null>(null);
	const [status, setStatus] = useState<"" | "warning" | "error" | undefined>(
		""
	);

	const onSearch = async () => {
		if (!validateInput(input)) {
			setStatus("warning");
			setLoading(false);
			return;
		}

		try {
			setStatus("");
			setLoading(true);
			const data = await searchAirports(input);
			setAirports(data);
			setLoading(false);
		} catch (error) {
			setStatus("error");
			setLoading(false);
		}
	};

	return { input, setInput, loading, airports, status, onSearch };
};