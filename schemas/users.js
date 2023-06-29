const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  authSchema,
  emailSchema,
};
