export const showNote = (notes, notesTable) => {
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
                            </tr>
                            <tr>
                                <td>Shopping list</td>
                                <td>April 20, 2022</td>
                                <td>Task</td>
                                <td>Tomatoes, bread</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>New Feature</td>
                                <td>May 05, 2022</td>
                                <td>Idea</td>
                                <td>Implement new feature 3/5/2022 and 5/5/2022</td>
                                <td>3/5/2022, 5/5/2022</td>
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

