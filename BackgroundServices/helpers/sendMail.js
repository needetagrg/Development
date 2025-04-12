import nodeMailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

function createTransporter(config) {
  const transporter = nodeMailer.createTransport(config);
  return transporter;
}

let configurations = {
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

const sendMail = async (messageoption) => {
  const transporter = createTransporter(configurations);
  await transporter.verify();

  await transporter.sendMail(messageoption, (error, info) => {
    if (error) {
      console.log("Error occurred while sending email:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
};

export default sendMail;
