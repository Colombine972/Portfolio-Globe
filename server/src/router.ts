import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("🔥 ROUTER OK 🔥");
});

router.get("/health", (_req, res) => {
  res.send("une autre route");
})

export default router;
