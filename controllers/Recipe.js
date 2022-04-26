const Recipe = require("../Models/Recipe");

// @route   GET api/recipes
// @desc    Get all recipes
// @access  Public
const getAllRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.find();
    res.status(200).json(recipe);
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  }
};

// @route   GET api/recipe/:id
// @desc    Get one recipe
// @access  Public
const getOneRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ status: 404, message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message });
  }
};

module.exports = {
  getAllRecipes,
  getOneRecipe,
};
