// --Imports--
import { fileURLToPath } from "url";
import { dirname } from "path";

// --Constants--
// Sets up directory name as this uses module instead of CommonJS now.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --Variables--
// Temporary Users to return from Route before mongoose setup.
let users = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@gmail.com",
    }
]

// --Defines export functions--
// Gets all players and turns it into a json to return.
export const getAllPlayers = async (req, res) => {
    return res.json(users);
};

// Gets the ID from the request params, then parses
// it into a json for the returned user.
export const getPlayerByID = async (req, res) => {
    // Obtains the ID from the url params.
    const id = req.params.id;
    // Obtains user from parsing the ID.
    const user = users.find((user) => user.id == parseInt(id));

    // If a user was not obtained, print a user not found!
    if (!user) {
        return req.status(404).send("User not found!");
    }
    return res.json(user);
};

// Parses a POST request body into the users, without an ID.
export const postNewPlayer = async (req, res) => {
    // Get the email and name from Body.
    const { email, name } = req.body;
    // Ensures that email and name fields were filled.
    if (!email || !name) {
        // Return error if not.
        return res.status(404).send("Required name or email fields not filled!");
    }

    // If everything went well, create a new user object and push it to array.
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
    }
    users.push(newUser);

    // Pushes good request.
    res.status(201).json(newUser);
};