import { MailAdapter, SendMailData } from "../mail-adapter";

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

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

