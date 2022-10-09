// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const userSchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true }, // Must match a valid email address (look into Mongoose's matching validation)
  thoughts: {}, // Array of _id values referencing the Thought model
  friends: {}, // Array of _id values referencing the User model (self-reference)
});

const User = mongoose.model("User", userSchema);

// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);

//  UserSchema Settings
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
