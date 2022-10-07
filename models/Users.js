// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const UserSchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true }, // Must match a valid email address (look into Mongoose's matching validation)
  thoughts: {}, // Array of _id values referencing the Thought model
  friends: {}, // Array of _id values referencing the User model (self-reference)
});

//  UserSchema Settings
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

// Reaction (SCHEMA ONLY)

// reactionId

// Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId
// reactionBody

// String
// Required
// 280 character maximum
// username

// String
// Required
// createdAt

// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
// Schema Settings

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.