import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { MailgunMailAdapter } from './adapters/mailgun/mailgun-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repositories';
import { SubmitFeedbackUseCase } from './uses-cases/submit-feedback-use-case';

export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot, email} = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const mailgunMailAdapter = new MailgunMailAdapter()
    
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        mailgunMailAdapter
        )
    
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
        email
    })

    return res.status(201).send()
})

routes.post('/notes', async (req, res) => {
    
})