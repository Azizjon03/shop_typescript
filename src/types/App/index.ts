export interface NoteForm {
    title: string,
    marksdown: string,
    tags: Tag[]
}
export interface Tag {
    id: string,
    label: string
}
export interface Note extends NoteForm {
    id: string
} 
