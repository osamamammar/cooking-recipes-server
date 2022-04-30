const Recipe = require("../models/Recipe");

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
    console.log(err);
    res.status(500).json({ status: 500, message: err.message });
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

// @route   DELETE /recipe/:id
// @desc    Delete a recipe
// @access  Public
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) {
      return res.status(404).json({ status: 404, message: "Recipe not found" });
    }
    res
      .status(200)
      .json({ status: 200, message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

// @route   POST /upload
// @desc    Upload a dish image
// @access  Public
const uploadImage = async (req, res) => {
  try {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res
        .status(400)
        .send({ status: 400, message: "No image were uploaded." });
    }
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = await req.files.img;
    uploadPath = "public/images/" + sampleFile.name;
    console.log(uploadPath);

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);

      res.send({
        status: 200,
        pictureUrl: `${process.env.DOMAIN_SERVER}/images/${sampleFile.name}`,
      });
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
    console.log(err);
  }
};

module.exports = {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  uploadImage,
};
