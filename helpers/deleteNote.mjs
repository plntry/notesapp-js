import { showNote } from "./showNote.mjs";
import { notes } from "../data/notes.js";
import { notesTable } from "../constants/constants.js";

export const deleteNote = (args) => {
    let item = args.target.parentElement.parentElement;
    let noteIndex = item.getAttribute('for');

    console.log(item.getAttribute('for'));
    console.log(notes[noteIndex]);
    notes.splice(item.getAttribute('for'), 1);

    showNote(notes, notesTable);
}