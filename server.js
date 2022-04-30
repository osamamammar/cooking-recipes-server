const express = require("express");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./routes/router");
const RouteNotFound = require("./controllers/RouteNotFound");
const connectDB = require("./database/db");

// Create express app
const app = express();
app.use("/public", express.static(path(__dirname) + "/public"));
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

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
