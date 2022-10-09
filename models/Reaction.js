// Reaction (SCHEMA ONLY)
const mongoose = require("mongoose");

// Create a new instance of the Mongoose schema to define shape of each document
const reactionSchema = new mongoose.Schema({
  reactionId: {}, // Use Mongoose's ObjectId data type
  // Default value is set to a new ObjectId
  reactionBody: { type: String, required: true, minLength: 1, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// createdAt

// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
// Schema Settings

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
