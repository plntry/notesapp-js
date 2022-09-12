let modal = document.getElementById('myModal');
let openModalbtn = document.getElementById('myBtn');
let closeModalspan = document.getElementsByClassName('close')[0];

const notesInput = document.querySelector('.notes-input input'),
notesTable= document.querySelector('.notes-table');

let notes = JSON.parse(localStorage.getItem('notes-list'));

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
            createdAt: new Date(),
            category: 'fd',
            content: 'fds',
            dates: 'dfs'
        }
        notes.push(noteInfo);
        localStorage.setItem('notes-list', JSON.stringify(notes));
        showNote();
    }
})

// When the user clicks the button, open the modal 
openModalbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModalspan.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}