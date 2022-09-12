const modal = document.getElementById('addNoteModal');
const openModalbtn = document.getElementById('myBtn');
const closeModalspan = document.getElementsByClassName('close')[0];

const notesInput = document.querySelector('.notes-input input');
const notesTable= document.querySelector('.notes-table');

const notes = JSON.parse(localStorage.getItem('notes-list'));

function showNote () {
    let noteElements = '';
    notesTable.innerHTML = `<tr>
                                <td>Name</td>
                                <td>Created</td>
                                <td>Category</td>
                                <td>Content</td>
                                <td>Dates</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>`;

    notes.forEach((note, id) => {
        noteElements += `<tr>
                            <td>${note.name}</td>
                            <td>${note.createdAt}</td>
                            <td>${note.category}</td>
                            <td>${note.content}</td>
                            <td>${note.dates}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`
    });
    notesTable.innerHTML += noteElements;
}

showNote();

notesInput.addEventListener('keyup', e=> {
    let userNote = notesInput.value;
    if (e.key == 'Enter' && userNote) {
        if (!notes) {
            notes = [];
        }

        notesInput.value = '';

        let noteInfo = {
            name: userNote,
            createdAt: new Date().toLocaleDateString({},
                {timeZone:"UTC", month:"long", day:"2-digit", year:"numeric"}
            ),
            category: 'fd',
            content: 'fds',
            dates: 'dfs'
        }
        notes.push(noteInfo);
        localStorage.setItem('notes-list', JSON.stringify(notes));
        showNote();
    }
})

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