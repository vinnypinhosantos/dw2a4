import { MailAdapter, SendMailData } from "../mail-adapter";

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client(
    {username: 'api', key: process.env.MAILGUN_API_KEY});

export class MailgunMailAdapter implements MailAdapter {

    async sendMail({subject, body, email}: SendMailData) {
    
        await mg.messages.create("sandbox0f91b730368841bb8d773ae2a7df8240.mailgun.org", {
            from: `Vinicius <vinicius@mailgun.org>`,
            to: `${email}`,
            subject,
            html: body
        })
    }
}

