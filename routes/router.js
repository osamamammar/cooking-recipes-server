const {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
} = require("../controllers/Recipe");
const {
  validateCreateNewRecipe,
  validateUpdateRecipe,
} = require("../middleware");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello !");
});

router.get("/recipes", getAllRecipes);
router.get("/recipe/:id", getOneRecipe);
router.post("/recipes", validateCreateNewRecipe, createRecipe);

router.put("/recipe/:id", validateUpdateRecipe, updateRecipe);

module.exports = router;
