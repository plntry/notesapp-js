import { showNote } from "./helpers/showNote.mjs";

const modal = document.getElementById('addNoteModal');
const openModalbtn = document.getElementById('myBtn');
const closeModalspan = document.getElementsByClassName('close')[0];

const notesNameInput = document.querySelector('.notes-name-input input');
const notesContentInput = document.querySelector('.notes-content-input input');
const selectedCategory = document.getElementById('categoryList');

const notesTable = document.querySelector('.notes-table');
const notes = JSON.parse(localStorage.getItem('notes-list'));

const addNoteForm = document.getElementById('addNoteForm');




addNoteForm.addEventListener('submit', event => {
    event.preventDefault();

    let noteName = notesNameInput.value;
    let noteCategory = selectedCategory.value;
    let noteContent = notesContentInput.value;
    console.log(noteCategory);
    
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
            dates: 'aaa'
        }

        notes.push(noteInfo);
        localStorage.setItem('notes-list', JSON.stringify(notes));

        modal.style.display = "none";
        showNote(notes, notesTable);
    }
});

showNote(notes, notesTable);


// Modal
openModalbtn.onclick = function() {
  modal.style.display = "block";
}

closeModalspan.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}