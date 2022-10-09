const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
// Create a new instance of the Mongoose schema to define shape of each document
const thoughtSchema = new Schema(
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
