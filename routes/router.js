const {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
} = require("../controllers/Recipe");
const validateCreateNewRecipe = require("../middleware");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello !");
});

router.get("/recipes", getAllRecipes);
router.get("/recipe/:id", getOneRecipe);
router.post("/recipes", validateCreateNewRecipe, createRecipe);

module.exports = router;
