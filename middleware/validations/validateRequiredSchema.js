const validateRequiredSchema = async (req, res, next) => {
  const { title, ingredients } = await req.body;

  if (!title || !ingredients) {
    return res
      .status(400)
      .json({ status: 400, message: "Title and Ingredients are required" });
  }

  if (typeof req.body.title !== "string") {
    return res.status(400).json({
      status: 400,
      message: "Title must be string",
    });
  }

  next();
};

module.exports = validateRequiredSchema;
