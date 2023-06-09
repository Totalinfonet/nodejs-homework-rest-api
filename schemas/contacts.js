const Joi = require("joi");

const contactAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const contactFavoriteUpdateSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  contactAddSchema,
  contactFavoriteUpdateSchema,
};
