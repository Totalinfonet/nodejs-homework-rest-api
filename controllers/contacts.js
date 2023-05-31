const Joi = require("joi");

const contactsService = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Name is required.",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.email": "Email must be a valid email address.",
  }),
  phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .required()
    .messages({
      "any.required": "Phone number is required.",
      "string.pattern.base":
        "Phone number must be in the format (###) ###-####.",
    }),
});

const getAll = async (req, res) => {
  const result = await contactsService.listContacts();
  res.json(result);
  res.json(console.table(result));
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);
  if (!result) {
    throw HttpError(404, `Contact with ID: ${id} not found...`);
  }
  res.json(result);
  res.json(console.table(result));
};

const add = async (req, res) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const result = await contactsService.addContact(req.body);
  res.status(201).json(result);
  res.json(console.table(result));
};

const updateById = async (req, res) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const { id } = req.params;
  const result = await contactsService.updateContact(id, req.body);
  if (!result) {
    throw HttpError(404, `Contact with ID: ${id} not found...`);
  }
  res.json(result);
  res.json(console.table(result));
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.removeContact(id);
  if (!result) {
    throw HttpError(404, `Contact with ID: ${id} not found...`);
  }
  res.json({ message: `Contact with ID: ${id} has been deleted.` });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
