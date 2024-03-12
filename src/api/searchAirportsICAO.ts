import { options } from "../constants/Options"
import { TAirport } from "../types/TAirport"
export const searchAirportsICAO = async (isao: string):Promise<TAirport[]> =>{
	const url = `https://api.api-ninjas.com/v1/airports?isao=${isao}&max_elevation=10`;
	const response = await fetch(url, options);
	const result = await response.json();
	return result as TAirport[]
}
