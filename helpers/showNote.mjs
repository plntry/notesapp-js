import { deleteNote } from "./deleteNote.mjs";
import { editNote } from "../index.js";

export const showNote = (notes, notesTable) => {
    notesTable.innerHTML = `<tr>
                                <th>Name</th>
                                <th>Created</th>
                                <th>Category</th>
                                <th>Content</th>
                                <th>Dates</th>
                                <th>
                                    <p class="icon">✏️</p>
                                </th>
                                <th>
                                    <p class="icon">📁<p/>
                                </th>
                                <th>
                                    <p class="icon">🗑️<p>
                                </th>
                            </tr>`;

    notes.forEach((note, id) => {
        notesTable.innerHTML += `<tr for="${id}">

                            <td>${note.name}</td>
                            <td>${note.createdAt}</td>
                            <td>${note.category}</td>
                            <td>${note.content}</td>
                            <td>${note.dates}</td>
                            <td>
                                <p class="icon editImg">✏️</p>
                            </td>
                            <td>
                                <p class="icon archiveImg">📁<p/>
                            </td>
                            <td>
                                <p class="icon deleteImg">🗑️</p>
                            </td>
                        </tr>`               
    });
    
    const deleteImg = document.getElementsByClassName('deleteImg');

    Array.prototype.forEach.call(deleteImg, element => {
        element.addEventListener('click', deleteNote.bind(this));
    });

    const editImg = document.getElementsByClassName('editImg');

    Array.prototype.forEach.call(editImg, element => {
        element.addEventListener('click', editNote.bind(this));
    });
}