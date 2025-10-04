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
        this.notes = []
        this.id = 0
    }

    createNote(title, content) {
        let id = ++this.id
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
        noteDiv.dataset.id = this.id

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
            newNote.content = newcontent
            p.textContent = `${newNote.content}`
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
        }
    }
}

let na = new NoteApp();
let elements;

document.querySelector('.add-note').addEventListener('click', () => {   
    let title = prompt("Enter a title for note")
    let content = prompt("Enter a content for note")
    let note = na.createNote(title, content)
    elements = na.renderNote(note)
})


document.querySelector('.remove-note').addEventListener('click', () => {
    let title = prompt("Enter a note Title")
    na.removeNote(title)
})