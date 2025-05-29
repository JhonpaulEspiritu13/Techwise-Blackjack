// --Imports--
import { Card, CardContent, Typography } from "@mui/material";

// --Exports--
// Creates and returns a new Player card from a given player.
export default function PlayerCardComponent({ player }) {
    // -Return all elements.-
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">{player.username}</Typography>
                <Typography variant="h5">{player.email}</Typography>
            </CardContent>
        </Card>
    )
};