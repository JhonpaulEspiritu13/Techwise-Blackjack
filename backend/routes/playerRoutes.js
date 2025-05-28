// --Imports--
import express from "express";
import { 
    getAllPlayers,
    getPlayerByID,
    postNewPlayer,
    putPlayerByID,
    deletePlayerByID,
} 
from "../controllers/playerController.js";

// --Constants--
const playerRouter = express.Router();

// --Define router usage for user pages.--
playerRouter.get("/", getAllPlayers);
playerRouter.get("/:id", getPlayerByID);
playerRouter.post("/", postNewPlayer);
playerRouter.put("/:id", putPlayerByID);
playerRouter.delete("/:id", deletePlayerByID);

export default playerRouter;
