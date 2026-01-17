import express from "express";
import { addMessage, editMessage, getAllMessages, getMessageById } from "./contactController"

const router = express.Router()

router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.post("/", addMessage);
router.put("/:id", editMessage);

export default router;