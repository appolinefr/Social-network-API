const { Schema, model } = require("mongoose");

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
const reactionSchema = new Schema({
  reactionId: {}, // Use Mongoose's ObjectId data type
  reactionBody: { type: String, required: true, minLength: 1, maxLength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create a new instance of the Mongoose schema to define shape of each document
const thoughtSchema = new mongoose.Schema(
  {
    toughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    // Use a getter method to format the timestamp on query
    username: { type: String, required: true },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = Thought;

