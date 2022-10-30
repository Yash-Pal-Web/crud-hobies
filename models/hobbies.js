const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const hobbySchema = new Schema(
  {
    userId: {
      type: Schema.ObjectId,
    },

    hobby: {
      type: String,
    },
  },

  { timestamps: true }
);

module.exports = Mongoose.model("Hobby", hobbySchema);
