import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

export const loginRoutes = Router();

loginRoutes.post("", createLoginController);
