import { MailAdapter } from "../adapters/mail-adapter"
import { FeedbacksRepository } from "../repositories/feedbacks-repository"

interface SubmitFeedbackUseCaseRequest {
    type: string
    comment: string
    screenshot?: string
    email?: string
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ){}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const {type, comment, screenshot, email} = request

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
            email
        })
        if (email) {
        await this.mailAdapter.sendMail({
            subject: 'Feedback enviado com sucesso',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: 11;">`,
                `<p>Seguem algumas informações sobre seu feedback:</p>`,
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" />` : ``,
                `</div>`
          ].join('\n'),
          email: email
        })}
    }
}