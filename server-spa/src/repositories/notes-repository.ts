export interface NoteCreateData {
    title: String,
    texto: String
}
export interface NotesRepository {
    create: (data: NoteCreateData) => Promise<void>
}