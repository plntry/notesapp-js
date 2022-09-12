import { showNote } from "./helpers/showNote.mjs";

const modal = document.getElementById('addNoteModal');
const openModalbtn = document.getElementById('myBtn');
const closeModalspan = document.getElementsByClassName('close')[0];

const notesNameInput = document.querySelector('.notes-name-input input');
const notesContentInput = document.querySelector('.notes-content-input input');
const selectedCategory = document.getElementById('categoryList');

const notesTable = document.querySelector('.notes-table');
localStorage.setItem('notes-list', JSON.stringify([{
    name: 'Shopping list',
    createdAt: 'April 20, 2022',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: ''
},
{
    name: 'New Feature',
    createdAt: 'July 14, 2022',
    category: 'Idea',
    content: 'Implement new feature to the project 10/10/2022',
    dates: '10/10/2022'
},
{
    name: 'New project',
    createdAt: 'August 18, 2022',
    category: 'Task',
    content: 'Create new project',
    dates: ''
},
{
    name: 'Help mother',
    createdAt: 'September 10, 2022',
    category: 'Task',
    content: 'Help mother with cooking for the party on 11/09/2022 and 12/09/2022',
    dates: '11/09/2022, 12/09/2022'
},
{
    name: 'Love to be Ukrainian',
    createdAt: 'April 20, 2022',
    category: 'Random Thought',
    content: 'Glory to Ukraine!',
    dates: ''
},
{
    name: 'Save Earth, save people',
    createdAt: 'April 20, 2022',
    category: 'Idea',
    content: 'Take part in some events for supporting peace and happiness on our planet',
    dates: ''
},
{
    name: 'Homework at the university',
    createdAt: 'April 20, 2022',
    category: 'Task',
    content: 'Doing my homework',
    dates: ''
},
]));

const notes = JSON.parse(localStorage.getItem('notes-list'));

const addNoteForm = document.getElementById('addNoteForm');




addNoteForm.addEventListener('submit', event => {
    event.preventDefault();

    let noteName = notesNameInput.value;
    let noteCategory = selectedCategory.value;
    let noteContent = notesContentInput.value;

    let regexp = /[0-9]{1,2}[\-/ \.][0-9]{1,2}[\-/ \.][0-9]{4}/g;
    let dateMatch = Array.from(noteContent.matchAll(regexp)).join(', ');
    console.log(dateMatch);

    // console.log(noteCategory);
    
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