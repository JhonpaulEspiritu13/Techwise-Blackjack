// --Imports--
import express from "express";
import { 
    getAllPlayers,
    getPlayerByID,
    postNewPlayer,
} 
from "../controllers/playerController.js";

// --Constants--
const playerRouter = express.Router();

// --Define router usage for user pages.--
playerRouter.get("/", getAllPlayers);
playerRouter.get("/:id", getPlayerByID);
playerRouter.post("/", postNewPlayer);

export default playerRouter;
