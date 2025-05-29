// --Constants--
const API = "http://localhost:3000/api/v1/";

// --Functions--
// Returns an error if a given response was invalid,
// otherwise return a JSON of the Response object.
const getJson = (response) => {
    if (!response.ok) {
        throw new Error("Response not OK");
    }
    return response.json();
}

// --Exports--
// Attempts to fetch from API. It calls for all available players.
export default function getAllPlayers(){
    return fetch(API + "players/").then(getJson);
};