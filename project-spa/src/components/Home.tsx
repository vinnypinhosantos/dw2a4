import { useState } from "react";
import { AddNotes, Note } from "./Notes/AddNotes";
import { NotesList } from "./Notes/NotesList";

export function Home() {
    const [notes, setNotes] = useState<Note[]>([])

    const handleAddNotes = (note: Note) => {
        console.log(note)
        setNotes([...notes, note])
    }

    return (
    <div>
        <AddNotes onAddNotes={handleAddNotes}/>
        <NotesList notes={notes}/>
    </div>    
    )
}