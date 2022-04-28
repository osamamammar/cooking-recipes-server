const express = require("express");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./routes/router");
const RouteNotFound = require("./controllers/RouteNotFound");
const connectDB = require("./database/db");

// Create express app
const app = express();

// Load env vars
dotenv.config();
const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

app.use(express.static("public"));
app.use(fileUpload());

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(router);
app.use(RouteNotFound);

// Start server
app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
});
