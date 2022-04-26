const { getAllRecipes, getOneRecipe } = require("../controllers/Recipe");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello !");
});

// @route   GET api/recipes
// @desc    Get all recipes
// @access  Public
router.get("/recipes", getAllRecipes);
router.get("/recipe/:id", getOneRecipe);

module.exports = router;
