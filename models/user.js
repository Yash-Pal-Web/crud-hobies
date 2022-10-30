const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
 
  },

  { timestamps: true }
);

module.exports = Mongoose.model("User", userSchema);
