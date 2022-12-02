import { FormEvent, useState } from "react";


export function CaesarForm() {
    const [message, setMessage] = useState("")
    const [key, setKey] = useState("")
    const [uncriptedMessageSent, setUncriptedMessageSent] = useState(false)
    const [criptedMessage, setCriptedMessage] = useState("")

    function handleSubmitUncriptedMessage(event: FormEvent) {
        event.preventDefault()

        const criptationKey = parseInt(key)
        const arrayMessage = Array.from(message)
        const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        
        let cipherMessage = ""
    
        arrayMessage.forEach((letter) => {
            let noodle = alphabet.indexOf(letter)
            let newNoodle = noodle + criptationKey
            cipherMessage += (newNoodle <= 26) ? (alphabet[newNoodle]) : letter 
        })

        setUncriptedMessageSent(true)
        setCriptedMessage(cipherMessage)
    }

    return (
        <form className="flex flex-col items-center justify-center" onSubmit={handleSubmitUncriptedMessage}>
            <span className="text-xl leading-1 p-5">Insira a frase:</span>
            
            <textarea className="min-w-[228px] w-1/2 min-h-[84px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent "
            onChange={event => setMessage(event.target.value) }></textarea>

            <span className="text-xl leading-1 p-5">Chave de Codificação:</span>

            <input type="text" className="outline-none min-w-[20px] w-1/2 min-h-[6px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent "
            onChange={event => setKey(event?.target.value)}/>
            
            <button type="submit" className="m-6 p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-md hover:bg-brand-300 focus-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-90 focus:ring-brand-500 transiction-colors disabled:opacity-50 disabled:hover:bg-brand-500"> Enviar </button>

            {(uncriptedMessageSent) ? (
                <>
                <span className="text-xl leading-1 p-4">Esta é sua cifra criptografada:</span>
                <span className="text-xl leading-1 p-4">{criptedMessage}</span>
                </>
            ) : (
                <></>
            )}

        </form>
    )
}