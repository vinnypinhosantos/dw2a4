import { ArrowLeft, Camera, MapPinLine } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { Loading } from "../../Loading"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested,
onFeedbackSent }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const [email, setEmail] = useState('')
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()

        setIsSendingFeedback(true)

        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
           screenshot,
          email
        })

        setIsSendingFeedback(false)
        onFeedbackSent()
    }

    return(
        <>
        <header>
            <button 
            type="button" 
            className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
            onClick={onFeedbackRestartRequested}
            >
                <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                {feedbackTypeInfo.title}
            </span>

        <CloseButton/>
        </header>

        <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
            <input 
            type="text" 
            className="min-w-[20px] w-full min-h-[6px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Insira seu e-mail"
            onChange={event => setEmail(event.target.value)}
            >
            </input>
            <textarea 
            className="min-w-[228px] w-full min-h-[84px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
            placeholder="Conte com detalhes o que está acontecendo"
            onChange={event => setComment(event.target.value)}
            >
            </textarea>
            <footer className="flex gap-2 mt-2">
                <ScreenshotButton 
                screenshot = {screenshot} 
                onScreenshotTook={setScreenshot}
                />

                <button
                type="submit"
                disabled={comment.length === 0 || isSendingFeedback}
                className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-90 focus:ring-brand-500 transiction-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                >
                    {isSendingFeedback ? <Loading/> : 'Enviar Feedback'}
                </button>
            </footer>
        </form>
        </>
)
}