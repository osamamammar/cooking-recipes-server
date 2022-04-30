const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  // create a new schema

  title: {
    type: String,
    required: true,
    maxlength: [200, "Title must be less than 200 characters"],
    minlength: [3, "Title must be at least 3 characters"],
    regex: [/^[a-zA-Z0-9 ]+$/, "Title must be alphanumeric"],
  },
  ingredients: {
    type: String,
    required: true,
    minlength: [10, "Ingredients must be more than 10 characters"],
    regex: [/^[a-zA-Z0-9\s,]*$/, "Ingredients must be alphanumeric"],
  },
  description: {
    type: String,
    required: false,
  },
  dish_img: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
