// --Constants--
// Sets up express for server stuff.
const express = require("express");
const app = express();
const PORT = 3000;

// --Middleware--
// Logs user requests.
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// Defines what the app can use and return.
app.use(express.static("public"));
app.use(loggerMiddleware);

// --Define App Pages--
// Home Page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\public\\index.html");
});

// Table Page
app.get("/table", (req, res) => {
    res.sendFile(__dirname + "\\public\\table.html");
});

// Rules Page
app.get("/rules", (req, res) => {
    res.sendFile(__dirname + "\\public\\rules.html");
});

// Signup Page
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "\\public\\signup.html");
});

// Basic Example Wireframe
app.get("/wireframe", (req, res) => {
    res.sendFile(__dirname + "\\public\\wireframe.html");
});

// API Request Page
app.get("/api_request", (req, res) => {
    res.sendFile(__dirname + "\\public\\api_request.html");
});

// Port Listener
app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});