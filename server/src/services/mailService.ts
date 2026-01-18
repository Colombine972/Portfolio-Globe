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

export async function sendContactNotification(
  category: string,
  name: string,
  commentaires: string
) {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `📩 Nouveau message – ${category}`,
    text: `
Nouveau message reçu :

Catégorie : ${category}
Nom : ${name}

Message :
${commentaires}
    `,
  });
}
