import { showNote } from "./showNote.mjs";
import { notes } from "../data/notes.js";
import { notesTable } from "../constants/constants.js";
import { summaryTable } from "../constants/constants.js";
import { showSummary } from "./showSummary.mjs";

export const unarchiveNote = (args) => {
    let item = args.target.parentElement.parentElement;
    let noteIndex = item.getAttribute('for');

    notes[noteIndex].status = 'active';

    document.getElementById(`tr${noteIndex}`).remove();

    showNote(notes, notesTable);
    showSummary(notes, summaryTable);
}