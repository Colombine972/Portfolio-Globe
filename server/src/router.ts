import express from "express";
import contactRouter from "./modules/contact/contactRouter";

const router = express.Router();

router.get("/health", (_req, res) => {
  res.send("🔥 ROUTER OK 🔥");
});

router.use("/api/contact", contactRouter);

export default router;
