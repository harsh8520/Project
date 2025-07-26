let inp = document.querySelector("#input")
let add = document.querySelector(".add")
let list = document.querySelector('.list')
let count = 0



function addToList() {
    let text = inp.value
    if (text == "") {
        alert("Please enter a task")
    }
    else {
        list.style.display = 'block'
        let li = document.createElement('li')
        li.setAttribute('class', 'list-item')
        li.setAttribute('onclick','taskDone()')
        li.textContent = text
        list.appendChild(li)
        let del = document.createElement('button')
        del.setAttribute('onclick', 'listDelete()')
        del.innerHTML = "<img src='./assets/delete.png' alt=''>"
        li.appendChild(del)
        inp.value = ""
        count++
    }
}

function listDelete() {
    let li = event.target.parentElement
    if (count == 1) {
        li.remove()
        list.style.display = 'none'
        count--
    }
    else {
        li.remove()
        count--
    }
}

function taskDone() {
    let li = event.target
    li.classList.toggle('active')
}