const express = require("express");

const ctrl = require("../../controllers/auth");

const { validatePostBody, authenticate } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

router.post("/register", validatePostBody(schemas.authSchema), ctrl.register);

router.post("/login", validatePostBody(schemas.authSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
