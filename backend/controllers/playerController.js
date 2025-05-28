// --Imports--
import Player from "../models/playerModel.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

// --Constants--
// Sets up directory name as this uses module instead of CommonJS now.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --Defines export functions--
// Gets all players and turns it into a json to return.
export const getAllPlayers = async (req, res) => {
    try {
        // Attempts to find all Players from model.
        const playerList = await Player.find();
        // Make response a 200 with the requested players.
        res.json({
            message: "Users fetched successfully",
            data: playerList,
        });
    }
    catch(error){
        // Console logs then returns a 500 Response.
        console.log("⛔️ Error fetching using function (getAllPlayers):");
        console.log(error);
        return res.status(500).json({message: error.message});
    }
};

// Gets the ID from the request params, then parses
// it into a json for the returned user.
export const getPlayerByID = async (req, res) => {
    // Obtains the ID from the url params.
    const id = req.params.id;
    try {
        // Attempts to find a Player by id.
        const player = await Player.findById(id);
        
        // Returns a 404 if the player was not found.
        if (!player){
            return res.status(404).json({message: `User with ID: ${id} not found.`})
        }

        // Make response a 200 with the requested player.
        res.json({
            message: "User fetched successfully",
            data: player,
        });
    }
    catch(error){
        // Console logs then returns a 500 Response.
        console.log("⛔️ Error fetching using function (getPlayerByID):");
        console.log(error);
        return res.status(500).json({message: error.message});
    }
};

// Parses a POST request body into the users, without an ID.
export const postNewPlayer = async (req, res) => {
    // Get the items from Body.
    const body = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        history: req.body.history,
    };

    try {
        // Attempts to create new Player from body.
        const player = await new Player(body).save();
        
        // Returns a 404 if the player was not found.
        if (!player){
            return res.status(404).json({message: `User with ID: ${id} not found.`})
        }

        // Make response a 201 with the newly created player.
        res.status(201).json({
            message: "User created successfully",
            data: {
                id: player._id
            }
        });
    }
    catch(error){
        // Console logs then returns a 500 Response.
        console.log("⛔️ Error fetching using function (postNewPlayer):");
        console.log(error);
        return res.status(500).json({message: error.message});
    }
};

// Parses a PUT request and updates or creates a new Player by ID.
export const putPlayerByID = async (req, res) => {
    // Obtains the ID from the url params.
    const id = req.params.id;
    // Get the items from Body.
    const body = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        history: req.body.history,
    };

    try {
        // Attempts to get and update the Player by ID.
        const player = await Player.findByIdAndUpdate(id, body, {new: true});
        
        // Returns a 404 if the player was not found.
        if (!player){
            return res.status(404).json({message: `User with ID: ${id} not found.`})
        }

        // Make response a 200 with the updated player.
        res.status(200).json({
            message: "User updated successfully"
        });
    }
    catch(error){
        // Console logs then returns a 500 Response.
        console.log("⛔️ Error fetching using function (putPlayerByID):");
        console.log(error);
        return res.status(500).json({message: error.message});
    }
};

// Parses a DELETE request and deletes a Player by ID.
export const deletePlayerByID = async (req, res) => {
    // Obtains the ID from the url params.
    const id = req.params.id;

    try {
        // Attempts to get and update the Player by ID.
        const player = await Player.findByIdAndDelete(id);
        
        // Returns a 404 if the player was not found.
        if (!player){
            return res.status(404).json({message: `User with ID: ${id} not found.`})
        }

        // Make response a 200 with the deleted player.
        res.status(200).json({
            message: "User deleted successfully"
        });
    }
    catch(error){
        // Console logs then returns a 500 Response.
        console.log("⛔️ Error fetching using function (deletePlayerByID):");
        console.log(error);
        return res.status(500).json({message: error.message});
    }
};