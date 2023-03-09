const { OPENAI_API_KEY } = require("../util/config.js");
const { Configuration, OpenAIApi } = require("openai");

// Setting up OpenAI Configuration for API Call
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Instantiating our createController controller object, which will hold our middleware functions
const createController = {};

createController.getStory = async (req, res, next) => {
  const prompt = req.body.prompt;

  // get text data from api
  try {
    // checking prompt length
    if (!prompt.length) {
      return next({
        log: `Bad request. No prompt entered. Please try again.`,
        status: 400,
        message: { err: "Error occurred in createController.getStory" },
      });
    }
    // requesting text from api
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 2048,
    });
    const firstStory = completion.data.choices[0].text;
    res.locals.story = firstStory;

    return next();
  } catch (error) {
    if (error.response) {
      return next({
        log: `OpenAI API 'getStory' error in createController.getStory middleware: ${error.response.data}`,
        status: error.response.status,
        message: {
          err: "An error occurred, please check server logs for details.",
        },
      });
    } else {
      return next({
        log: `OpenAI API 'getStory' error in createController.getStory middleware: ${error.message}`,
        message: {
          err: "An error occurred, please check server logs for details.",
        },
      });
    }
  }
};

createController.splitText = (req, res, next) => {
  // store generated story in local variable
  const story = res.locals.story;
  // split string on line
  const splits = story.split("\n");
  // create object that will be passed onto next middleware
  const splitStory = {};
  // initialize counter to manage object key values
  let counter = 1;
  // iterate through array
  splits.forEach((split) => {
    // if a split is empty, don't add split into splitStory object
    if (!split.length) {
      return;
    } else {
      splitStory[counter] = split;
      counter++;
    }
  });
  // store splitStory into res.locals.splitStory
  res.locals.splitStory = splitStory;
  // move onto next middleware
  return next();
};

createController.getImages = async (req, res, next) => {
  // take the 'splitStory' object from res.locals persisted from 'splitText' middleware
  const splitStory = res.locals.splitStory;
  // instantiate 'res.locals.pictures' to an empty object
  res.locals.pictures = {};

  try {
    // Get Images from DALL-E, generate an image for each prompt in 'splitStory'
    for (const key in splitStory) {
      const prompt = `An animated depiction of: ${splitStory[key]}`;

      // requesting Image Creation from DALL-E
      const image = await openai.createImage({
        prompt,
        n: 1,
        size: "512x512",
      });

      const image_url = image.data.data[0].url;
      // save the image url into 'res.locals.pictures' object, key-ed alike with 'res.locals.splitStory'
      res.locals.pictures[key] = image_url;
    }
    return next();
  } catch (error) {
    // Catch any errors with the OpenAI API call
    if (error.response) {
      return next({
        log: `OpenAI API 'getImages' error in createController.getImages middleware: ${error.response.data}`,
        status: error.response.status,
        message: {
          err: "An error occurred, please check server logs for details.",
        },
      });
    } else {
      return next({
        log: `OpenAI API 'getImages' error in createController.getImages middleware: ${error.message}`,
        message: {
          err: "An error occurred, please check server logs for details.",
        },
      });
    }
  }
};

module.exports = createController;
