const Recipe = require("../Models/Recipe");

const getAllRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.find();
    res.status(200).json(recipe);
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  }
};

module.exports = {
  getAllRecipes,
};
