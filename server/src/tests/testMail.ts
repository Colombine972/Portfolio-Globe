import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

async function testMail() {
  await transporter.sendMail({
    from: `"Test Mail" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: "✅ Test Nodemailer OK",
    text: "Si tu reçois ce mail, tout fonctionne 🎉",
  });

  console.log("Mail envoyé avec succès !");
}

testMail().catch(console.error);
