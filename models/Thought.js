// Define Mongoose
const mongoose = require("mongoose");

// Create a new instance of the Mongoose schema to define shape of each document
const ToughtSchema = new mongoose.Schema({
  toughtText: { type: String, required: true }, // Must be between 1 and 280 characters
  // createdAt
  createdAt: { type: String, required: true, unique: true }, 
  // Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
  username: { type: String, required: true }, 
  reactions: {}, // Array of nested documents created with the reactionSchema
});

// Schema Settings
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
