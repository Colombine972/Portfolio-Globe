import express from "express";
import cors from "cors";
import router from "./router";
import database from "./database/client";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://cindycolombine.vercel.app",
    // ajoute ici ton ancien domaine si tu veux
    // "https://ancien-nom.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());

app.get("/test-db", async (req, res) => {
 const [rows] = await database.query("SELECT 1");
res.json({
message: "Connexion à la base OK 🎉",
rows,
});
});

app.use(router);




export default app;
