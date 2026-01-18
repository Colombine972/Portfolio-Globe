import express from "express";
import { addMessage, editMessage, getAllMessages, getMessageById, markMessageAsRead } from "./contactController"

const router = express.Router()

router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.post("/", addMessage);
router.put("/:id", editMessage);
router.put("/:id/read", markMessageAsRead);

export default router;