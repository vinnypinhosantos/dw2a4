import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1c3e83fd04af31",
      pass: "6b7dc38e4a2db5"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {

    async sendMail({subject, body, email}: SendMailData) {
    
    await transport.sendMail({
        from: 'Vinicius <vinicius@feedget.com>',
        to: `Cliente <${email}>`,
        subject,
        html: body
    })}
}