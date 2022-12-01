import { CheckSquare } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";

export type Note = {
    title: String,
    text: String
}

interface AddNotesProps {
    onAddNotes: (note: Note) => void
}

export function AddNotes ({onAddNotes}: AddNotesProps) {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const handleSubmitAddNotes = (e: FormEvent) => {
        e.preventDefault()

        const note = {
            title,
            text
        }

        onAddNotes(note)
    }

    return (
        <form onSubmit={handleSubmitAddNotes}>
            <div>
                <input type="text" name="title" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                    }}/>
                <CheckSquare/>
            </div>
            <div>
                <textarea name="text" value={text} onChange={(e) => {
                    setText(e.target.value)
                }}></textarea>
            </div>
            <button type="submit">Salvar</button>
        </form>
    )
}