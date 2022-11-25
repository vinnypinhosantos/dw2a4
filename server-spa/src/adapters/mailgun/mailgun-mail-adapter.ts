import { MailAdapter, SendMailData } from "../mail-adapter";

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client(
    {username: 'api', key: process.env.MAILGUN_API_KEY ||'a62c494c5b74f5ecd604fdf63199356a-69210cfc-40549016'});

export class MailgunMailAdapter implements MailAdapter {

    async sendMail({subject, body, email}: SendMailData) {
    
        await mg.messages.create(email, {
            from: `User <${email}>`,
            to: ["test@example.com"],
            subject,
            html: body
        })
    }
}

