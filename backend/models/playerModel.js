// --Imports--
import mongoose from "mongoose";

// --Constants--
const Schema = mongoose.Schema;

// --Create the Player model schema--
const playerSchema = Schema({
    username: {type: String, required:true, unique: true},
    password: {type: String, required:true, minlength: 8},
    email: {type: String, required:true, unique: true},
    history: [{type: Schema.Types.ObjectId, ref: "Session"}]
});

// Exports model as default, making mongoose auto-create collection.
const Player = mongoose.model("Player", playerSchema);
export default Player;