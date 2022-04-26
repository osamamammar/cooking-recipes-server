const mongoose = require("mongoose");

const validateObjectId = async (req, res, next) => {
  const { id } = await req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      status: 400,
      message: "Invalid id",
    });
  }
  next();
};

module.exports = validateObjectId;
