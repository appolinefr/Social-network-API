const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      validate: {
        validator: v => {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`,
      },
      required: [true, "User email address is required"],
    }, 
    thoughts: [{type: Schema.Types.ObjectId,
    ref: "thought"}],
    friends: [{type: Schema.Types.ObjectId,
    ref: "user"}],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
