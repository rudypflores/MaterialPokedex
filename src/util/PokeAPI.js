/*
	Fetch API and receive berry name and size
*/
const PokeAPI = {
	search(query, ext) {
		return fetch(query + ext + "/")
			.then(response => {
				return response.json();
			})
			.catch(e => {
				console.log("404 Request with PokeAPI has failed.");
				return e;
			})
			.then(data => {
				//Check for types
				if(data.types.length !== 1) { //if it has 2 types
					return {
						img: data.sprites.front_default,
						name: data.name,
						type: data.types[0].type.name + " " + data.types[1].type.name,
						ability: data.abilities[0].ability.name
					};
				} else { //if it has only one type
					return {
						img: data.sprites.front_default,
						name: data.name,
						type: data.types[0].type.name,
						ability: data.abilities[0].ability.name
					};
				}
			}).catch(e => {
				//Handle exception where typo is found
				console.log("Pokemon not found!");
				return null;
			});
	}
}
export default PokeAPI;