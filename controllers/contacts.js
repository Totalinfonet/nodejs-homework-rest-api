const Contact = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.getContactById(id);
//   if (!result) {
//     throw HttpError(404, `Contact with ID: ${id} not found...`);
//   }
//   res.json(result);
//   res.json(console.table(result));
// };

// const add = async (req, res) => {
//   const result = await contactsService.addContact(req.body);
//   res.status(201).json(result);
//   res.json(console.table(result));
// };

// const updateById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.updateContact(id, req.body);
//   if (!result) {
//     throw HttpError(404, `Contact with ID: ${id} not found...`);
//   }
//   res.json(result);
//   res.json(console.table(result));
// };

// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.removeContact(id);
//   if (!result) {
//     throw HttpError(404, `Contact with ID: ${id} not found...`);
//   }
//   res.json({ message: `Contact with ID: ${id} has been deleted.` });
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  // getById: ctrlWrapper(getById),
  // add: ctrlWrapper(add),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById),
};
