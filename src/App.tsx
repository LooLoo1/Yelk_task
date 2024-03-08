import { Input } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import { validateInput } from "./helpers/validators";
import { searchAirports } from "./api/searchAirports";

const { Search } = Input;

function App() {
	const [input, setInput] = useState("");
	const [airports, setAirports] = useState("");
	const [status, setStatus] = useState<"" | "warning" | "error" | undefined>(
		""
	);

	const onSearch = async () => {
		if (validateInput(input)) {
			setStatus("");
			console.log(" Done");
			const data = await searchAirports(input);
			setAirports(data);
		} else {
			setStatus("warning");
		}
	};

	useEffect(() => {
		searchAirports(input);
	}, [input]);

	return (
		<>
			<Search
				placeholder="input search text"
				enterButton="Search"
				size="large"
				// loading={}
				status={status}
				value={input}
				onChange={e => setInput(e.target.value)}
				onPressEnter={onSearch}
				onSearch={onSearch}
			/>
		</>
	);
}

export default App;
