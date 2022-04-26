const express = require("express");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const router = require("./routes/router");
const connectDB = require("./database/db");

// Create express app
const app = express();

// default options
app.use(fileUpload());

// Load env vars
dotenv.config();
const PORT = process.env.PORT || 5000;

// Database Connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(router);

// Start server
app.listen(PORT, async () => {
  console.log(`server is running on port ${PORT}`);
});
