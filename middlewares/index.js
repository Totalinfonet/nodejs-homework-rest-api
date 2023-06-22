const {
  validatePostBody,
  validatePutBody,
  validatePatchBody,
} = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");

module.exports = {
  validatePostBody,
  validatePutBody,
  validatePatchBody,
  isValidId,
  authenticate,
};
