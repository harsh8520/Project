let container = document.querySelector('.container')
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

    createNote() {
        let id = ++this.id
        let newNote = new Note(id, `Note-${id}`, 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit aperiam harum ullam necessitatibus. Dignissimos, optio dolore! At accusamus deleniti delectus vitae repudiandae, rem ad aspernatur in officiis hic. Nihil.')
        this.notes.push(newNote)
        return newNote
    }

    renderNote(newNote) {
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let btn = document.createElement('button')
        h1.textContent = `${newNote.title}`
        p.textContent = `${newNote.content}`
        btn.textContent = 'Click to Edit'
        btn.classList.add('editBtn')

        container.appendChild(h1)
        container.appendChild(p)
        container.appendChild(btn)

        btn.addEventListener('click',()=>{
            let newcontent = prompt("Enter a new Content")
            newNote.content = newcontent
            p.textContent = `${newNote.content}`
        })
    }

    renderAllNotes() {
        container.innerHTML = '';
        this.notes.forEach((note)=>{this.renderNote(note)})
    }

    removeNote(noteId) {
        let newNotes = this.notes.filter(note => note.noteId !== noteId)
        this.notes = newNotes
        this.renderAllNotes()
    }
}


let na = new NoteApp();
let elements;

document.querySelector('.addBtn').addEventListener('click', () => {
    let note = na.createNote()
    elements = na.renderNote(note)
})


document.querySelector('.removeBtn').addEventListener('click',()=>{
    let id = Number(prompt("Enter a note Id"))
    na.removeNote(id)
})