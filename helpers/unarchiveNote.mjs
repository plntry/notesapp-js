import { showNote } from "./showNote.mjs";
import { notes } from "../data/notes.js";
import { notesTable } from "../constants/constants.js";
import { summaryTable } from "../constants/constants.js";
import { showSummary } from "./showSummary.mjs";

export const unarchiveNote = (args) => {
    let item = args.target.parentElement.parentElement;
    let noteIndex = item.getAttribute('for');
    console.log(noteIndex, 'unarch');

    notes[noteIndex].status = 'active';

    document.getElementById(`tr${noteIndex}`).remove();

    if (!notes.some(note => note.category === notes[noteIndex].category &&
        note.status === 'archived')) {
        document.getElementById('archived-category-table').remove();
        document.getElementById('category-name-archived').remove();
    }

    showNote(notes, notesTable);
    showSummary(notes, summaryTable);
}