import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";


export const generateSecret = () => {
  //Login Secret Text
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};


export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "xogus1015@naver.com",
    to: adress,
    subject: "🔒Join Secret for web-chat🔒",
    html: `Hello! Your Join secret is <span style="font-size: 20px; color:"red""><strong>${secret}</strong></span>.<br/>Copy paste on the app/website to log in`
  };
  return sendMail(email);
};

export const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET,  { expiresIn: 60 * 60 });

