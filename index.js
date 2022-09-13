import { notes } from "./data/notes.js";
import { addNoteModal,
        openAddNoteModalbtn,
        closeaddNoteModalspan,
        submitNoteBtn,
        notesNameInput,
        notesContentInput,
        selectedCategory,
        notesTable,
        addNoteForm } from "./constants/constants.js";
import { showNote } from "./helpers/showNote.mjs";

let isEditedNote = false;
let noteIndex = 0;

export const editNote = (args) => {
    let item = args.target.parentElement.parentElement;
    noteIndex = item.getAttribute('for');

    isEditedNote = true;

    notesNameInput.value = notes[noteIndex].name;
    selectedCategory.value = notes[noteIndex].category;
    notesContentInput.value = notes[noteIndex].content;

    submitNoteBtn.value = 'Save changes';
    addNoteModal.style.display = 'block';

    showNote(notes, notesTable);
}

showNote(notes, notesTable);

addNoteForm.addEventListener('submit', event => {
    event.preventDefault();

    let noteName = notesNameInput.value;
    let noteCategory = selectedCategory.value;
    let noteContent = notesContentInput.value;

    let regexp = /[0-9]{1,2}[\-/ \.][0-9]{1,2}[\-/ \.][0-9]{4}/g;
    let dateMatch = [...noteContent.matchAll(regexp)].join(', ');
    
    if (noteName && noteCategory && noteContent) {
        if (!isEditedNote) {
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
        } else {
            isEditedNote = false;

            notes[noteIndex].name = noteName;
            notes[noteIndex].category = noteCategory;
            notes[noteIndex].content = noteContent;
        }

        notesNameInput.value = '';
        selectedCategory.value = 'Task';
        notesContentInput.value = '';
        
        addNoteModal.style.display = "none";
        showNote(notes, notesTable);

        
}
});

// Modal Create New Note
openAddNoteModalbtn.onclick = function() {
    submitNoteBtn.value = 'Create';
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
