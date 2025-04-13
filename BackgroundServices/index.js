import express from "express";
import dotenv from "dotenv";
import dbconnection from "./utils/db.js";
import cron from "node-cron";
import sendWelcomeEmail from "./EmailServices/sendWelcomeEmail.js";
import sendPendingOrderEmail from "./EmailServices/sendPendingOrderEmail.js";
import sendDeliveredOrderEmail from "./EmailServices/sendDeliveredOrderEmail.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

//SCHEDULE SERVICES
const services = () => {
  cron.schedule(" * * * * * * ", () => {
    sendWelcomeEmail();
    sendPendingOrderEmail();
    sendDeliveredOrderEmail();
  });
};

services();

app.listen(PORT, () => {
  console.log(`Backgroundservices is running on port ${PORT}`);
  dbconnection();
});
