import NoteList from './noteList.js';
import {writeId} from './helpers';

export default class Note {
    constructor (title, content) {
        this.id = writeId(NoteList.getIds());
        this.title = title;
        this.content = content;
        //this.date = helpers.today(); 
        this.pinned = false;
    }

    togglePin() {
        this.pinned = !this.pinned
    }
   
}