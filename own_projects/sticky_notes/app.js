const notes = document.querySelector('.notes__container');
const newNote = document.querySelector('.notes__addNewNote');
const search = document.querySelector('.notes__search');


// add new note
newNote.addEventListener('submit', e =>{
    e.preventDefault();
    const newNoteText = newNote.newNoteText.value;
    const html = `
    <div class="notes__note">
        <p class="note__text">${newNoteText}</p>
        <svg class="notes__icon-trash">
            <use xlink:href="media/SVG/symbol-defs.svg#icon-bin"></use>
        </svg>
    </div>`;

    notes.innerHTML += html;

    console.log(newNoteText);
    newNote.newNoteText.value = "";
});

// remove note
notes.addEventListener('click', e =>{
    if(e.target.parentElement.classList.value === 'notes__note'){
        e.target.parentElement.remove();
    }else if(e.target.parentElement.classList.value === 'notes__icon-trash') {
        e.target.parentElement.parentElement.remove();
    }
    // console.log(e.target.parentElement.classList.value);
    // console.log(e.target);

});

// search term
search.addEventListener('keyup', e=>{

    e.preventDefault();
    const toBeSearched = search.searchInput.value.trim().toLocaleLowerCase();
    // hide elements that doesn't match
    Array.from(notes.children)
        .filter(note => !note.textContent.toLocaleLowerCase().includes(toBeSearched))
        .forEach(note => note.classList.add('hide'));
    // show elements that match
    Array.from(notes.children)
        .filter(note => note.textContent.toLocaleLowerCase().includes(toBeSearched))
        .forEach(note => note.classList.remove('hide'));

});

