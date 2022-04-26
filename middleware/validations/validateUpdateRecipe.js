const validateUpdateRecipe = async (req, res, next) => {
  const { title, ingredients } = await req.body;

  if (title.length > 100) {
    return res.status(400).json({
      status: 400,
      message: "Title must be less than 100 characters",
    });
  } else if (title.length < 3) {
    return res.status(400).json({
      status: 400,
      message: "Title must be more than 3 characters",
    });
  }

  if (ingredients.length > 1000) {
    return res.status(400).json({
      status: 400,
      message: "Ingredients must be less than 1000 characters",
    });
  } else if (ingredients.length < 10) {
    return res.status(400).json({
      status: 400,
      message: "Ingredients must be more than 10 characters",
    });
  }
  next();
};

module.exports = validateUpdateRecipe;
