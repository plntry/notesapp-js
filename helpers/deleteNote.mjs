import { showNote } from "./showNote.mjs";
import { notes } from "../data/notes.js";
import { notesTable } from "../constants/constants.js";

export const deleteNote = (args) => {
    let item = args.target.parentElement.parentElement;

    notes.splice(item.getAttribute('for'), 1);
    showNote(notes, notesTable);
}