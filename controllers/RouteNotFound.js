const RouteNotFound = (req, res) => {
  res.status(404).json({
    status: 404,
    message: "this url not found",
  });
};

module.exports = RouteNotFound;
