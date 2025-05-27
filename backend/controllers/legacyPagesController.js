// --Imports--
import { fileURLToPath } from "url";
import { dirname } from "path";

// --Constants--
// Sets up directory name as this uses module instead of CommonJS now.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --Defines export functions--
export const getIndex = async (req, res) => {
    res.sendFile(__dirname + "\\public\\legacy\\index.html");
};

export const getTable = async (req, res) => {
    res.sendFile(__dirname + "\\public\\legacy\\table.html");
};

export const getRules = async (req, res) => {
    res.sendFile(__dirname + "\\public\\legacy\\rules.html");
};

export const getSignup = async (req, res) => {
    res.sendFile(__dirname + "\\public\\legacy\\signup.html");
};

export const getWireframe = async (req, res) => {
    res.sendFile(__dirname + "\\public\\legacy\\wireframe.html");
};

export const getAPIRequest = async (req, res) => {
    res.sendFile(__dirname + "\\public\\legacy\\api_request.html");
};