const express = require("express");

const ctrl = require("../../controllers/auth");

const { validatePostBody } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

router.post(
  "/register",
  validatePostBody(schemas.registerSchema),
  ctrl.register
);

router.post("/login", validatePostBody(schemas.loginSchema), ctrl.login);

module.exports = router;
