import { categories } from "../constants/constants.js";
import { showArchivedCategory } from "./showArchivedCategory.mjs";

function showCategorySummary (activeCategory, archivedCategory, table, category) {
    if (activeCategory.length || archivedCategory.length) {
        table.innerHTML += `<tr for="${categories.indexOf(category)}">
                                <td>${category}</td>
                                <td>${activeCategory.length}</td>
                                <td class="archived-cell">${archivedCategory.length}</td>
                            </tr>`
    
        const archivedCategoryBtn = document.getElementsByClassName('archived-cell');

        Array.prototype.forEach.call(archivedCategoryBtn, element => {
            element.addEventListener('click', showArchivedCategory.bind(this));
        });
    }
}

export const showSummary = (notes, summaryTable) => {
    summaryTable.innerHTML = `<tr>
                                    <th>Note Category</th>
                                    <th>Active</th>
                                    <th>Archived</th>
                                </tr>`;

    categories.forEach(category => {
        let activeCategory = notes.filter(note => note.category === category && note.status === 'active');
        let archivedCategory = notes.filter(note => note.category === category && note.status === 'archived');
        
        showCategorySummary(activeCategory, archivedCategory, summaryTable, category);
    })
}