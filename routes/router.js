const router = require("express").Router();

const {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  uploadImage,
} = require("../controllers/Recipe");

const {
  validateCreateNewRecipe,
  validateUpdateRecipe,
} = require("../middleware");

router.get("/", (req, res) => {
  res.send("Hello !");
});

// @route   GET /recipes
// @desc    Get all recipes
// @access  Public
router.get("/recipes", getAllRecipes);
// @route   GET /recipe/:id
// @desc    Get one recipe
// @access  Public
router.get("/recipe/:id", getOneRecipe);
// @route   POST /recipe
// @desc    Create a recipe
// @access  Public
router.post("/recipes", validateCreateNewRecipe, createRecipe);
// @route   POST /upload
// @desc    Upload a dish image
// @access  Public
router.post("/upload", uploadImage);
// @route   PUT /recipe/:id
// @desc    Update a recipe
// @access  Public
router.put("/recipe/:id", validateUpdateRecipe, updateRecipe);
// @route   DELETE /recipe/:id
// @desc    Delete a recipe
// @access  Public
router.delete("/recipe/:id", deleteRecipe);

module.exports = router;
