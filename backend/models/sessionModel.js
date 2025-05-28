// --Imports--
import mongoose from "mongoose";

// --Constants--
const Schema = mongoose.Schema;

// --Create the Session model schema--
const sessionSchema = Schema({
    // Defines the game type of this session.
    // Poker is the only one that will be on the website,
    // but listing others as an example.
    type: {
        type: String,
        required: true,
        enum: ["Poker", "Slots", "Baccarat", "Craps"],
    },
    history: [{type: Number}]
});

// Exports model as default, making mongoose auto-create collection.
const Session = mongoose.model("Session", sessionSchema);
export default Session;