const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  validatePostBody,
  validatePutBody,
  validatePatchBody,
  isValidId,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validatePostBody(schemas.contactAddSchema), ctrl.add);

router.put(
  "/:id",
  isValidId,
  validatePutBody(schemas.contactAddSchema),
  ctrl.updateById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validatePatchBody(schemas.contactFavoriteUpdateSchema),
  ctrl.updateStatusContact
);

router.delete("/:id", isValidId, ctrl.deleteById);

module.exports = router;
