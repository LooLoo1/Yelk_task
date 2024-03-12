import { useAirportSearch } from "../hooks/useAirportSearch";

import { Flex, Input, Row } from "antd";
import { Frame } from "../components/Frame";

const { Search } = Input;

export const Home = () => {
	const { input, setInput, loading, airports, status, onSearch } =
		useAirportSearch();

	return (
		<Flex gap="large" vertical>
			<Search
				placeholder="Search airports"
				enterButton="Search"
				size="large"
				loading={loading}
				status={status}
				value={input}
				onChange={e => setInput(e.target.value)}
				onPressEnter={onSearch}
				onSearch={onSearch}
			/>

			<Row gutter={[16, 16]}>
				{airports &&
					airports.map((airport, i) => <Frame key={i} airport={airport} />)}
			</Row>
		</Flex>
	);
};
