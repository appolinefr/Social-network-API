// Define Mongoose
const mongoose = require("mongoose");

// Create a new instance of the Mongoose schema to define shape of each document
const thoughtSchema = new mongoose.Schema({
  toughtText: { type: String, required: true, minLength: 1, maxLength: 280 }, 
  createdAt: { type: Date, default: Date.now },
  // Use a getter method to format the timestamp on query
  username: { type: String, required: true },
  reactions: {}, // Array of nested documents created with the reactionSchema
});
// Schema Settings
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = mongoose.model("Thought", thoughtSchema);

// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);
