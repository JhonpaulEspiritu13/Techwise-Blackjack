// --Imports--
// MaterialUI Components
import { Stack } from "@mui/material";
// React Components
import { useState, useEffect } from "react";
// App Components
import PlayersListComponent from "../components/PlayersListComponent";
import PlayerCardComponent from "../components/PlayerCardComponent";
// Service
import getAllPlayers from "../services/players";

// --Exports--
// Creates a Players page, gathering data from backend.
export default function PlayersPage(){
    // -Constants-
    // States
    const [ players, setPlayers ] = useState([]);
    const [ status, setStatus ] = useState("loading");

    // -Functions-
    async function fetchPlayers() {
        try{
            // Uses services to get players from API.
            const responseContent = await getAllPlayers();
            // Sets players by data specifically.
            setPlayers(responseContent.data);
            setStatus("loaded");
        }
        // Catches errors and logs them to console.
        catch(error){
            console.log("Error fetching Players:", error);
            setStatus("error");
        }
    };

    // -Effect-
    useEffect(() => {
        fetchPlayers();
    }, []);

    // -Render Map-
    const renderMap = {
        loading: <div></div>,
        loaded: <PlayersListComponent players={players}/>
    };

    // -Return all elements.-
    return (
        <Stack>
            <h1>Players</h1>
            {renderMap[status]}
        </Stack>
    );
};