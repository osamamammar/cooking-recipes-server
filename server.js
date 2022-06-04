const express = require("express");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./routes/router");
const RouteNotFound = require("./controllers/RouteNotFound");
const connectDB = require("./database/db");
const bodyParser = require("body-parser");

// Create express app
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

// CORS security
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, multipart/form-data"
  );
  next();
});

// Load env vars
dotenv.config();
const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

app.use(express.static("public"));
app.use(fileUpload());

// Middleware
// parse application/json
// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));

// Routes
app.use(router);
app.use(RouteNotFound);

// Start server
app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
});
