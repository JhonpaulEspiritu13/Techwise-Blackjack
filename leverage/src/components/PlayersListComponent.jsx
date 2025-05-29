// --Imports--
// MaterialUI Components
import { List, ListItem } from "@mui/material";
// App Components
import PlayerCardComponent from "./PlayerCardComponent";

// --Exports--
export default function PlayersListComponent({ players }) {
    // -Functions-
    // Creates an empty list component.
    function createEmptyList(){
        return <List></List>
    }

    // Creates a MaterialUI List, with Player Components as the list items.
    function createPlayerList(playerArray){
        return(
            <List>
                {playerArray.map((player) => {
                    return(
                        <ListItem key={player._id}>
                            <PlayerCardComponent player={player}/>
                        </ListItem>
                    )
                })}
            </List>
        )
    };

    // -Returns.-
    if (players.length === 0){
        return createEmptyList();
    }
    else{
        return createPlayerList(players);
    }
};