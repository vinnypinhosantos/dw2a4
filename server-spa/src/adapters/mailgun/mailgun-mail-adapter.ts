import { MailAdapter, SendMailData } from "../mail-adapter";

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client(
    {username: 'api', key: process.env.MAILGUN_API_KEY});

export class MailgunMailAdapter implements MailAdapter {

    async sendMail({subject, body, email}: SendMailData) {
    
        await mg.messages.create(email, {
            from: `Vinicius <vinnypinhosantos@gmail.com>`,
            to: `${email}`,
            subject,
            html: body
        })
    }
}

