import { MailAdapter, SendMailData } from "../mail-adapter";

import nodemailer from 'nodemailer';
import nodemailMailgun from 'nodemailer-mailgun-transport';

const auth = {
    auth: {
        api_key: "key-" + process.env.MAILGUN_API_KEY,
        domain: 'sandbox0f91b730368841bb8d773ae2a7df8240.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(nodemailMailgun(auth))

export class MailgunMailAdapter implements MailAdapter {

    async sendMail({subject, body, email}: SendMailData) {
    
        await transporter.sendMail({
            from: `Vinicius <vinicius@mailgun.org>`,
            to: `${email}`,
            subject,
            html: body
        })
    }
}

