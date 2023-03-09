const express = require("express");
const app = express();
const cors = require("cors");
const createRouter = require("./routes/createRouter");
const config = require("./util/config");

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    callback(null, true);
  },
};

// Apply CORs with options, and handling parsing request body
app.use(cors(corsOptions));
app.use(express.json());

// Set up routes
app.use("/create", createRouter);

// Catch-All Route Handler
app.use("*", (req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(err.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Listen to server on specified port (defined within config.js)
app.listen(config.PORT, () => {
  console.log(`Server listening on port: ${config.PORT}`);
});

module.exports = app;
