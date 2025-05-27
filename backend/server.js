// --Imports--
import express from "express";
import cors from "cors";
import legacyRouter from "./routes/legacyPagesRoutes.js";
import playerRouter from "./routes/playerRoutes.js";

// --Constants--
// Sets up express for server stuff.
const app = express();
const PORT = 3000;

// --Middleware--
// Defines what the app can use and return.
app.use(express.static("public"));
// Client-side JS Requests.
app.use(cors());
// Parse incoming JSON requests.
app.use(express.json());
// Logs user requests.
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// --Routes--
// The Legacy Pages from previous assignments.
app.use("/legacy", legacyRouter);
// Player routes, which will be defined as our API.
app.use("/api/v1/players", playerRouter)

// --Start Server--
// Port Listener
app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});