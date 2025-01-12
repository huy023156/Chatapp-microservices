import express from "express";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
import isAuthenticated from "../../../isAuthenticated.js";

const router = express.Router();

router.get("/users", isAuthenticated, getUsersForSidebar);
router.get("/:id", isAuthenticated, getMessages);

router.post("/send/:id", isAuthenticated, sendMessage);

export default router;
