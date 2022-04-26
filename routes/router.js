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

// Gets requests
router.get("/recipes", getAllRecipes);
router.get("/recipe/:id", getOneRecipe);

// Posts requests
router.post("/recipes", validateCreateNewRecipe, createRecipe);
router.post("/upload", uploadImage);

// Puts requests
router.put("/recipe/:id", validateUpdateRecipe, updateRecipe);

// Deletes requests
router.delete("/recipe/:id", deleteRecipe);

module.exports = router;
