import Note from './note.js'

class NoteList {
    constructor() {
        this.notes = []
    }

    add(note) {
        this.notes.push(note);
    }

    getIds() {
        let ids = []

        for (let note of this.notes) {
            ids.push(note.id);
        }

        return ids
    }
}

export default new NoteList()