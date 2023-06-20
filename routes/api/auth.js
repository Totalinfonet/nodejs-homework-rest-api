const express = require("express");

const ctrl = require("../../controllers/auth");

const { validatePostBody, authenticate } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

router.post(
  "/register",
  validatePostBody(schemas.registerSchema),
  ctrl.register
);

router.post("/login", validatePostBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

module.exports = router;
