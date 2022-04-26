const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  // create a new schema

  title: {
    type: String,
    required: true,
    maxlength: [100, "Title must be less than 100 characters"],
    minlength: [3, "Title must be at least 3 characters"],
    regex: [/^[a-zA-Z0-9 ]+$/, "Title must be alphanumeric"],
  },
  ingredients: {
    type: String,
    required: true,
    maxlength: [1000, "Ingredients must be less than 1000 characters"],
    minlength: [10, "Ingredients must be more than 10 characters"],
    regex: [/^[a-zA-Z0-9\s,]*$/, "Ingredients must be alphanumeric"],
  },
  description: {
    type: String,
    required: false,
    maxlength: [5000, "Description must be less than 5000 characters"],
    minlength: [10, "Description must be more than 10 characters"],
    regex: [/^[a-zA-Z0-9\s,]*$/, "Description must be alphanumeric"],
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
