



export const showSummary = (notes, summaryTable) => {
    summaryTable.innerHTML = `<tr>
                                    <th>Note Category</th>
                                    <th>Active</th>
                                    <th>Archived</th>
                                </tr>`;

    let activeTask = notes.filter(note => note.category === 'Task' && note.status === 'active');
    let archivedTask = notes.filter(note => note.category === 'Task' && note.status === 'archived');

    let activeRandom = notes.filter(note => note.category === 'Random Thought' && note.status === 'active');
    let archivedRandom = notes.filter(note => note.category === 'Random Thought' && note.status === 'archived');

    let activeIdea = notes.filter(note => note.category === 'Idea' && note.status === 'active');
    let archivedIdea = notes.filter(note => note.category === 'Idea' && note.status === 'archived');
                        
    if (activeTask.length || archivedTask.length) {
        summaryTable.innerHTML += `<tr>
                                        <td>Task</td>
                                        <td>${activeTask.length}</td>
                                        <td>${archivedTask.length}</td>
                                    </tr>`
    }
    
    if (activeRandom.length || archivedRandom.length) {
        summaryTable.innerHTML += `<tr>
                                        <td>Random Thought</td>
                                        <td>${activeRandom.length}</td>
                                        <td>${archivedRandom.length}</td>
                                    </tr>`
    }

    if (activeIdea.length || archivedIdea.length) {
        summaryTable.innerHTML += `<tr>
                                        <td>Idea</td>
                                        <td>${activeIdea.length}</td>
                                        <td>${archivedIdea.length}</td>
                                    </tr>`
    }
}