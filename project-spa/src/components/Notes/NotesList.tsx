import { Note } from "./AddNotes"

interface NoteListProps {
    notes: Note[]
}

export function NotesList({notes}:NoteListProps) {
    return (
        <div>
            <ul>
            {
                notes.map((note)=> {
                    return (
                    <li>
                        <h4>{note.title}</h4>
                        <p>{note.text}</p>
                    </li>
                    )
                })
            }
            </ul>
        </div>
    )
}