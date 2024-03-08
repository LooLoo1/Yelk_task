const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1abf8a23dmshdc018ae819857dep111bb8jsn7920d8039844',
		'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
	}
};

export const searchAirports = async (q: string) =>{
	const url = `https://aerodatabox.p.rapidapi.com/airports/search/term?q=${q}&limit=10`;
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		return result
	} catch (error) {
		console.error(error);
	}
}
