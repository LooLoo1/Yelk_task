import { Card, Col, Table } from "antd";
import { useState } from "react";
import { searchAirportsICAO } from "../api/searchAirportsICAO";
import { Columns } from "../constants/TableTitles";
import { type TAirport } from "../types/TAirport";

export const Frame = ({
	airport: { name, icao, timezone, country },
}: {
	airport: TAirport;
}) => {
	const [toggle, setToggle] = useState(false);
	const [data, setData] = useState<TAirport[] | undefined>(undefined);
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		try {
			setLoading(true);
			const result = await searchAirportsICAO(icao);
			setData(result);
		} catch (error) {
			console.error("Error fetching airport data:", error);
		}
		setLoading(false);
	};

	return (
		<>
			<Col
				span={24}
				sm={toggle ? 24 : 24}
				md={toggle ? 24 : 12}
				xl={toggle ? 24 : 8}
				style={{ cursor: "pointer" }}
				onClick={() => {
					setToggle(prev => !prev);
					if (!data) {
						fetchData();
					}
				}}
			>
				<Card title={name}>
					<p>
						<b>ICAO:</b> {icao}
					</p>
					<p>
						<b>Country:</b> {country},
					</p>
					<p>
						<b>Time zone:</b> {timezone}
					</p>
				</Card>

				{loading && <p>Loading...</p>}

				{data && toggle && (
					<Table
						columns={Columns}
						dataSource={data}
						pagination={false}
						scroll={{ x: "max-content" }}
					/>
				)}
			</Col>
		</>
	);
};
