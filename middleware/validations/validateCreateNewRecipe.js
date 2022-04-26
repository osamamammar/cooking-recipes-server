const validateCreateNewRecipe = async (req, res, next) => {
  const { title, ingredients } = await req.body;

  if (!title) {
    return res.status(400).json({ status: 400, message: "Title is required" });
  }

  if (!ingredients) {
    return res
      .status(400)
      .json({ status: 400, message: "Ingredients is required" });
  }

  if (typeof req.body.title !== "string") {
    return res.status(400).json({
      status: 400,
      message: "Title must be string",
    });
  }

  next();
};

module.exports = validateCreateNewRecipe;
