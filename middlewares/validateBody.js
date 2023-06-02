const { HttpError } = require("../helpers");

const validatePostBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorMessage = error.details
        .map((detail) => {
          const field = detail.context.label;
          return field ? `${field} field` : "";
        })
        .join(", ");
      next(HttpError(400, `Missing required ${errorMessage}`));
    } else {
      next();
    }
  };
  return func;
};

const validatePutBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Missing fields" });
    } else {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        const errorMessage = error.details
          .map((detail) => {
            const field = detail.context.label;
            return field ? `${field} field` : "";
          })
          .join(", ");
        next(HttpError(400, `Missing required ${errorMessage}`));
      } else {
        next();
      }
    }
  };
  return func;
};

module.exports = {
  validatePostBody,
  validatePutBody,
};
