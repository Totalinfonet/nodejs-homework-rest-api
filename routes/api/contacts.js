const express = require("express");

const contactsService = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await contactsService.listContacts();
    res.json(result);
    res.json(console.table(result));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsService.getContactById(id);
    res.json(result);
    res.json(console.table(result));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
