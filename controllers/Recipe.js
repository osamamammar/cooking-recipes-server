const Recipe = require("../Models/Recipe");

// @route   GET /recipes
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

// @route   GET /recipe/:id
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

// @route   POST /recipe
// @desc    Create a recipe
// @access  Public
const createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe({
      title: req.body.title,
      ingredients: req.body.ingredients,
      description: req.body.description,
      dish_img: req.body.dish_img,
    });

    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message || "Some error occurred while creating a recipe.",
    });
  }
};

// @route   PUT /recipe/:id
// @desc    Update a recipe
// @access  Public
const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body);

    if (!recipe)
      return res.status(404).json({ status: 404, message: "Recipe not found" });

    res.status(200).json({
      status: 200,
      message: "Recipe updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

module.exports = {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
};
