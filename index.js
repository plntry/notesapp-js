import { notes } from "./data/notes.js";
import { addNoteModal,
        openaddNoteModalbtn,
        closeaddNoteModalspan,
        notesNameInput,
        notesContentInput,
        selectedCategory,
        notesTable,
        addNoteForm } from "./data/elements.js";
import { showNote } from "./helpers/showNote.mjs";

showNote(notes, notesTable);

addNoteForm.addEventListener('submit', event => {
    event.preventDefault();

    let noteName = notesNameInput.value;
    let noteCategory = selectedCategory.value;
    let noteContent = notesContentInput.value;

    let regexp = /[0-9]{1,2}[\-/ \.][0-9]{1,2}[\-/ \.][0-9]{4}/g;
    let dateMatch = Array.from(noteContent.matchAll(regexp)).join(', ');
    console.log(dateMatch);
    
    if (noteName && noteCategory && noteContent) {
        if (!notes) {
            notes = [];
        }
        
        notesNameInput.value = '';
        selectedCategory.value = 'Task';
        notesContentInput.value = '';

        let noteInfo = {
            name: noteName,
            createdAt: new Date().toLocaleDateString({},
                {timeZone:"UTC", month:"long", day:"2-digit", year:"numeric"}
            ),
            category: noteCategory,
            content: noteContent,
            dates: dateMatch
        }

        notes.push(noteInfo);

        addNoteModal.style.display = "none";
        showNote(notes, notesTable);
    }
});

// Modal Create New Note
openaddNoteModalbtn.onclick = function() {
    addNoteModal.style.display = "block";
}

closeaddNoteModalspan.onclick = function() {
    addNoteModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == addNoteModal) {
    addNoteModal.style.display = "none";
  }
}