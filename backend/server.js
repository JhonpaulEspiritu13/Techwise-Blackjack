// --Imports--
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import legacyRouter from "./routes/legacyPagesRoutes.js";
import playerRouter from "./routes/playerRoutes.js";

// --Constants--
// Sets up express for server stuff.
const app = express();
const PORT = 3000;
const MONGO_URI = "mongodb://127.0.0.1:27017/leverage";

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

// --DB Connections--
async function main() {
    try {
        await mongoose.connect(MONGO_URI);
        // Continues with console log.
        console.log("✅ Connected to MongoDB.");
    }
    catch (error) {
        console.log("⛔️ Error connecting to MongoDB:");
        console.log(error);
        // Exits with failure.
        process.exit(1);
    }

    // Port Listener
    app.listen(PORT, () => {
        console.log(`Server is running at http://127.0.0.1:${PORT}`);
    });
};

// --Routes--
// The Legacy Pages from previous assignments.
app.use("/legacy", legacyRouter);
// Player routes, which will be defined as our API.
app.use("/api/v1/players", playerRouter);

// --Start Server--
// Start the main app.
main();