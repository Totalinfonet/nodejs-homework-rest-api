const express = require("express");

const ctrl = require("../../controllers/auth");

const { validatePostBody, authenticate, upload } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

router.post("/register", validatePostBody(schemas.authSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/verify",
  validatePostBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

router.post("/login", validatePostBody(schemas.authSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
