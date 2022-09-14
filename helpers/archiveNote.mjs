import { showNote } from "./showNote.mjs";
import { notes } from "../data/notes.js";
import { notesTable } from "../constants/constants.js";
import { summaryTable } from "../constants/constants.js";
import { showSummary } from "./showSummary.mjs";

export const archiveNote = (args) => {
    let item = args.target.parentElement.parentElement;
    let noteIndex = item.getAttribute('for');

    console.log(notes[noteIndex]);

    notes[noteIndex].status = 'archived';

    showNote(notes, notesTable);
    showSummary(notes, summaryTable);
}