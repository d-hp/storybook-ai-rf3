const express = require("express");
const createController = require("../controllers/createController");
const createRouter = express.Router();

// GET request to main endpoint
createRouter.post(
  "/",
  createController.getStory,
  createController.splitText,
  createController.getImages,
  (req, res) => {
    return res.status(200).json({
      story: res.locals.splitStory,
      pictures: res.locals.pictures,
    });
  }
);

module.exports = createRouter;
