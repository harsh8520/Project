let container = document.querySelector('.notes-wrapper')
class Note {
    constructor(noteId, title, content) {
        this.noteId = noteId
        this.title = title
        this.content = content
    }
}

class NoteApp {
    constructor() {
        JSON.parse(localStorage.getItem('noteStorage')) == null ? this.notes = [] : this.notes = JSON.parse(localStorage.getItem('noteStorage'))
    }

    createNote(title, content) {
        let id = Date.now()
        let newNote = new Note(id, title, content)
        this.notes.push(newNote)
        return newNote
    }

    renderNote(newNote) {
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let btn = document.createElement('button')

        let noteDiv = document.createElement('div')
        noteDiv.classList.add('note')

        let titleDiv = document.createElement('div')
        titleDiv.classList.add('note-title')
        titleDiv.appendChild(h1)

        let contentDiv = document.createElement('div')
        contentDiv.classList.add('note-content')
        contentDiv.appendChild(p)

        h1.textContent = `${newNote.title}`
        p.textContent = `${newNote.content}`
        btn.textContent = 'Click to Edit'
        btn.classList.add('editBtn')

        noteDiv.appendChild(titleDiv)
        noteDiv.appendChild(contentDiv)
        noteDiv.appendChild(btn)
        container.appendChild(noteDiv)

        btn.addEventListener('click', () => {
            let newcontent = prompt("Enter a new Content")
            if (newcontent == null) return
            else {
                newNote.content = newcontent
                p.textContent = `${newNote.content}`
                this.handleLocalStorage()
            }
        })

    }

    renderAllNotes() {
        container.innerHTML = '';
        this.notes.forEach((note) => { this.renderNote(note) })
    }

    removeNote(noteTitle) {
        let note = this.notes.find(n => n.title.toLowerCase() == noteTitle.toLowerCase())
        if (note == undefined) { alert("Please enter valid id") }
        else {
            let newNotes = this.notes.filter(note => note.title.toLowerCase() !== noteTitle.toLowerCase())
            this.notes = newNotes
            this.renderAllNotes()
            this.handleLocalStorage()
        }
    }

    handleLocalStorage() {
        localStorage.setItem('noteStorage', JSON.stringify(this.notes))
    }

    renderNotesFromStorage() {
        if (this.notes.length > 0) this.renderAllNotes()
    }
}

let na = new NoteApp();
na.renderNotesFromStorage()
let noteContainer = document.querySelector('.enter-note')

let inputTitle = document.querySelector('#title')
let inpContent = document.querySelector('#content')

function addNoteHandler() {
    noteContainer.style.opacity = '1'
    noteContainer.style.display = 'block'
}

function addNote() {
    if (inputTitle.value == '' || inpContent.value == '') alert("Enter something")
    else {
        let note = na.createNote(inputTitle.value, inpContent.value)
        na.renderNote(note)
        inputTitle.value = ''
        inpContent.value = ''
        noteContainer.style.display = 'none'
        noteContainer.style.opacity = '0'
        na.handleLocalStorage()
    }
}

document.querySelector('.remove-note').addEventListener('click', () => {
    let title = prompt("Enter a note Title")
    na.removeNote(title)
})

function handleCloseNote() {
    inputTitle.value = ''
    inpContent.value = ''
    noteContainer.style.display = 'none'
    noteContainer.style.opacity = '0'
}