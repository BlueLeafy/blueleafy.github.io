import express from "express";
import { validateRegisterInput } from "../middleware/validationMiddleware.js";
import { createAdmin } from "../controllers/createAdmin.js";
import {getAllUsers, getUser, login, logout} from "../controllers/adminControllers.js";

const router = express.Router();

// create admin and users
router.post("/register", validateRegisterInput, createAdmin);

// login and logout
router.post("/login", login);
router.post("/logout", logout)

// Get users
router.get("/current-user", getUser);
router.get("/users", getAllUsers);

export default router;