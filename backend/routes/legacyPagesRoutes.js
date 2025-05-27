// --Imports--
import express from "express";
import { 
    getIndex,
    getTable,
    getRules,
    getSignup,
    getWireframe,
    getAPIRequest
} 
from "../controllers/legacyPagesController.js";

// --Constants--
const legacyRouter = express.Router();

// --Define router usage for legacy pages.--
// Home Page
legacyRouter.get("/", getIndex);

// Table Page
legacyRouter.get("/table", getTable);

// Rules Page
legacyRouter.get("/rules", getRules);

// Signup Page
legacyRouter.get("/signup", getSignup);

// Basic Example Wireframe
legacyRouter.get("/wireframe", getWireframe);

// API Request Page
legacyRouter.get("/api_request", getAPIRequest);

export default legacyRouter;