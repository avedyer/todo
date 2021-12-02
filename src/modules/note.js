import NoteList from './noteList.js';
import {writeId} from './helpers';
import dateFormat, { masks } from "dateformat";
const now = new Date();

export default class Note {
    constructor (title, content) {
        this.id = writeId(NoteList.getIds());
        this.title = title;
        this.content = content;
        this.date = dateFormat(now, "mm dd yyyy");
        this.pinned = false;
    }

    togglePin() {
        this.pinned = !this.pinned
    }
   
}