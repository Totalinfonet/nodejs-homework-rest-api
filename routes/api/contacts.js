const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  validatePostBody,
  validatePutBody,
  validatePatchBody,
  isValidId,
  authenticate,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  validatePostBody(schemas.contactAddSchema),
  ctrl.add
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validatePutBody(schemas.contactAddSchema),
  ctrl.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validatePatchBody(schemas.contactFavoriteUpdateSchema),
  ctrl.updateStatusContact
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteById);

module.exports = router;
