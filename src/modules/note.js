import defaultExport from './helpers.js'
import NoteList from './noteList.js'
import newId from './helpers'

export default class Note {
    constructor (title, content) {
        this.id = newId(NoteList.getIds());
        this.title = title;
        this.content = content;
        //this.date = helpers.today(); 
        this.pinned = false;
    }
}