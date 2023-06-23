const {
  validatePostBody,
  validatePutBody,
  validatePatchBody,
} = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  validatePostBody,
  validatePutBody,
  validatePatchBody,
  isValidId,
  authenticate,
  upload,
};
