import express from "express";
import { checkAuth, login, logout, signup, updateProfile, verifyToken, getUsers, getAuthenticatedUser } from "../controllers/auth.controller.js";
import isAuthenticated from "../../../isAuthenticated.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", isAuthenticated, updateProfile);

router.get("/check", isAuthenticated, checkAuth);

router.get('/verify-token', verifyToken);

router.get('/users', isAuthenticated, getUsers);

router.get('/authUser', isAuthenticated, getAuthenticatedUser);

export default router;
