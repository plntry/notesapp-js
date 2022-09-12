export const showNote = (notes, notesTable) => {
    let noteElements = '';
    notesTable.innerHTML = `<tr>
                                <td>Name</td>
                                <td>Created</td>
                                <td>Category</td>
                                <td>Content</td>
                                <td>Dates</td>
                                <td></td>
                                <td>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm9 11v-4h-2v4H8l4 4 4-4h-3zm6.764-7l-1-2H5.237l-1 2h15.527z"/>
                                    </g>
                                </svg>
                                </td>
                                <td><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
                                <title>trash</title>
                                <desc>Created with sketchtool.</desc>
                                <g id="web-app" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="trash" fill="#000000" fill-rule="nonzero">
                                        <path d="M4,5 L7,5 L7,4 C7,2.8954305 7.8954305,2 9,2 L15,2 C16.1045695,2 17,2.8954305 17,4 L17,5 L20,5 C20.5522847,5 21,5.44771525 21,6 C21,6.55228475 20.5522847,7 20,7 L19,7 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,7 L4,7 C3.44771525,7 3,6.55228475 3,6 C3,5.44771525 3.44771525,5 4,5 Z M7,7 L7,20 L17,20 L17,7 L7,7 Z M9,5 L15,5 L15,4 L9,4 L9,5 Z M9,9 L11,9 L11,18 L9,18 L9,9 Z M13,9 L15,9 L15,18 L13,18 L13,9 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </svg></td>
                            </tr>
                            <tr>
                                <td>Shopping list</td>
                                <td>April 20, 2022</td>
                                <td>Task</td>
                                <td>Tomatoes, bread</td>
                                <td></td>
                                <td><button>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.361 2.91158C16.5764 1.69614 18.547 1.69614 19.7625 2.91158L21.0884 4.23753C22.3039 5.45297 22.3039 7.4236 21.0884 8.63904L8.63904 21.0884C8.05536 21.6721 7.26373 22 6.43828 22H2.84882C2.38003 22 2 21.62 2 21.1512V17.5617C2 16.7363 2.32791 15.9446 2.91158 15.361L15.361 2.91158ZM18.5621 4.112C18.0096 3.55952 17.1138 3.55952 16.5614 4.112L14.2351 6.43828L17.5617 9.76491L19.888 7.43863C20.4405 6.88615 20.4405 5.99042 19.888 5.43794L18.5621 4.112ZM16.3613 10.9653L13.0347 7.6387L4.112 16.5614C3.84669 16.8267 3.69764 17.1865 3.69764 17.5617V20.3024H6.43828C6.81349 20.3024 7.17332 20.1533 7.43863 19.888L16.3613 10.9653Z" fill="#030D45"/>
                                </svg>
                              </button></td>
                                <td><button>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm9 11v-4h-2v4H8l4 4 4-4h-3zm6.764-7l-1-2H5.237l-1 2h15.527z"/>
                                    </g>
                                </svg>
                              </button></td>
                                <td><button>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            
                                    <title>trash</title>
                                    <desc>Created with sketchtool.</desc>
                                    <g id="web-app" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="trash" fill="#000000" fill-rule="nonzero">
                                            <path d="M4,5 L7,5 L7,4 C7,2.8954305 7.8954305,2 9,2 L15,2 C16.1045695,2 17,2.8954305 17,4 L17,5 L20,5 C20.5522847,5 21,5.44771525 21,6 C21,6.55228475 20.5522847,7 20,7 L19,7 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,7 L4,7 C3.44771525,7 3,6.55228475 3,6 C3,5.44771525 3.44771525,5 4,5 Z M7,7 L7,20 L17,20 L17,7 L7,7 Z M9,5 L15,5 L15,4 L9,4 L9,5 Z M9,9 L11,9 L11,18 L9,18 L9,9 Z M13,9 L15,9 L15,18 L13,18 L13,9 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </svg>
                              </button></td>
                            </tr>
                            <tr>
                                <td>New Feature</td>
                                <td>May 05, 2022</td>
                                <td>Idea</td>
                                <td>Implement new feature 3/5/2022 and 5/5/2022</td>
                                <td>3/5/2022, 5/5/2022</td>
                                <td><button>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.361 2.91158C16.5764 1.69614 18.547 1.69614 19.7625 2.91158L21.0884 4.23753C22.3039 5.45297 22.3039 7.4236 21.0884 8.63904L8.63904 21.0884C8.05536 21.6721 7.26373 22 6.43828 22H2.84882C2.38003 22 2 21.62 2 21.1512V17.5617C2 16.7363 2.32791 15.9446 2.91158 15.361L15.361 2.91158ZM18.5621 4.112C18.0096 3.55952 17.1138 3.55952 16.5614 4.112L14.2351 6.43828L17.5617 9.76491L19.888 7.43863C20.4405 6.88615 20.4405 5.99042 19.888 5.43794L18.5621 4.112ZM16.3613 10.9653L13.0347 7.6387L4.112 16.5614C3.84669 16.8267 3.69764 17.1865 3.69764 17.5617V20.3024H6.43828C6.81349 20.3024 7.17332 20.1533 7.43863 19.888L16.3613 10.9653Z" fill="#030D45"/>
                                </svg>
                              </button></td>
                                <td><button>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm9 11v-4h-2v4H8l4 4 4-4h-3zm6.764-7l-1-2H5.237l-1 2h15.527z"/>
                                    </g>
                                </svg>
                              </button></td>
                                <td><button>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            
                                    <title>trash</title>
                                    <desc>Created with sketchtool.</desc>
                                    <g id="web-app" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="trash" fill="#000000" fill-rule="nonzero">
                                            <path d="M4,5 L7,5 L7,4 C7,2.8954305 7.8954305,2 9,2 L15,2 C16.1045695,2 17,2.8954305 17,4 L17,5 L20,5 C20.5522847,5 21,5.44771525 21,6 C21,6.55228475 20.5522847,7 20,7 L19,7 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,7 L4,7 C3.44771525,7 3,6.55228475 3,6 C3,5.44771525 3.44771525,5 4,5 Z M7,7 L7,20 L17,20 L17,7 L7,7 Z M9,5 L15,5 L15,4 L9,4 L9,5 Z M9,9 L11,9 L11,18 L9,18 L9,9 Z M13,9 L15,9 L15,18 L13,18 L13,9 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </svg>
                              </button></td>
                            </tr>`;

    notes.forEach((note, id) => {
        noteElements += `<tr>
                            <td>${note.name}</td>
                            <td>${note.createdAt}</td>
                            <td>${note.category}</td>
                            <td>${note.content}</td>
                            <td>${note.dates}</td>
                            <td><button>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.361 2.91158C16.5764 1.69614 18.547 1.69614 19.7625 2.91158L21.0884 4.23753C22.3039 5.45297 22.3039 7.4236 21.0884 8.63904L8.63904 21.0884C8.05536 21.6721 7.26373 22 6.43828 22H2.84882C2.38003 22 2 21.62 2 21.1512V17.5617C2 16.7363 2.32791 15.9446 2.91158 15.361L15.361 2.91158ZM18.5621 4.112C18.0096 3.55952 17.1138 3.55952 16.5614 4.112L14.2351 6.43828L17.5617 9.76491L19.888 7.43863C20.4405 6.88615 20.4405 5.99042 19.888 5.43794L18.5621 4.112ZM16.3613 10.9653L13.0347 7.6387L4.112 16.5614C3.84669 16.8267 3.69764 17.1865 3.69764 17.5617V20.3024H6.43828C6.81349 20.3024 7.17332 20.1533 7.43863 19.888L16.3613 10.9653Z" fill="#030D45"/>
                            </svg>
                          </button></td>
                            <td><button>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm9 11v-4h-2v4H8l4 4 4-4h-3zm6.764-7l-1-2H5.237l-1 2h15.527z"/>
                                </g>
                            </svg>
                          </button></td>
                            <td><button>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        
                                <title>trash</title>
                                <desc>Created with sketchtool.</desc>
                                <g id="web-app" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="trash" fill="#000000" fill-rule="nonzero">
                                        <path d="M4,5 L7,5 L7,4 C7,2.8954305 7.8954305,2 9,2 L15,2 C16.1045695,2 17,2.8954305 17,4 L17,5 L20,5 C20.5522847,5 21,5.44771525 21,6 C21,6.55228475 20.5522847,7 20,7 L19,7 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,7 L4,7 C3.44771525,7 3,6.55228475 3,6 C3,5.44771525 3.44771525,5 4,5 Z M7,7 L7,20 L17,20 L17,7 L7,7 Z M9,5 L15,5 L15,4 L9,4 L9,5 Z M9,9 L11,9 L11,18 L9,18 L9,9 Z M13,9 L15,9 L15,18 L13,18 L13,9 Z" id="Shape"></path>
                                    </g>
                                </g>
                            </svg>
                          </button></td>
                        </tr>`
    });
    notesTable.innerHTML += noteElements;
}

