import { notes } from "../data/notes.js";
import { categories, archivedCategoryTable } from "../constants/constants.js";
import { unarchiveNote } from "./unarchiveNote.mjs";

export const showArchivedCategory = (args) => {
    let item = args.target.parentElement;
    let categoryIndex = item.getAttribute('for');

    archivedCategoryTable.innerHTML = `<tr>
                                            <th>Name</th>
                                            <th>Created</th>
                                            <th>Category</th>
                                            <th>Content</th>
                                            <th>Dates</th>
                                            <th>
                                                <p class="icon">📁</p>
                                            </th>
                                        </tr>`;

    notes.forEach((note, id) => {
        if (note.category === categories[categoryIndex] && note.status === 'archived') {
            archivedCategoryTable.innerHTML += `<tr for="${id}" id="tr${id}">
                                                    <td>${note.name}</td>
                                                    <td>${note.createdAt}</td>
                                                    <td>${note.category}</td>
                                                    <td>${note.content}</td>
                                                    <td>${note.dates}</td>
                                                    <td>
                                                        <p class="icon unarchiveImg">📁<p/>
                                                    </td>
                                                </tr>`
        }             
    });

    const unarchiveImg = document.getElementsByClassName('unarchiveImg');

    Array.prototype.forEach.call(unarchiveImg, element => {
        element.addEventListener('click', unarchiveNote.bind(this));
    });
}