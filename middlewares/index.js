const {
  validatePostBody,
  validatePutBody,
  validatePatchBody,
} = require("./validateBody");
const isValidId = require("./isValidId");

module.exports = {
  validatePostBody,
  validatePutBody,
  validatePatchBody,
  isValidId,
};
