import express from "express";
import { addMessage, getAllMessages, getMessageById } from "./contactController"

const router = express.Router()

router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.post("/", addMessage)

export default router;