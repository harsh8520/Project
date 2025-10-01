class Task {
    constructor(taskId, taskName) {
        this.taskId = taskId
        this.taskName = taskName
        this.isRunning = true
    }
}

class TaskManager {
    constructor() {
        this.tasks = []
    }

    createTask() {
        let id = this.tasks.length + 1
        let newTask = new Task(id, `Task-${id}`)
        this.tasks.push(newTask)
        return newTask
    }

    renderTask(task) {
        let li = document.createElement('li')
        let span = document.createElement('span')
        li.dataset.id = task.taskId
        li.textContent = `${task.taskId} \t | \t ${task.taskName}`
        span.textContent = `${handleTask(task.isRunning)}`
        li.appendChild(span)
        taskList.appendChild(li)
    }

    changeStatus(id) {
        let task = this.tasks.find(t => t.taskId === id)
        if (task) {
            task.isRunning = !task.isRunning
            let span = document.querySelectorAll('span')[task.taskId - 1]
            span.classList.toggle('stopped')
            span.textContent = `${handleTask(task.isRunning)}`
        }
        else console.log('Ivalid task Id');
    }
}

let taskList = document.querySelector('.taskList')
let TM = new TaskManager()

function addTask() {
    let task = TM.createTask()
    TM.renderTask(task)
}

function handleTask(isRunning) {
    if (isRunning) {
        return ('Running...')
    }
    else {
        return ("Stopped!")
    }

}

function changeStatus(id) {
    TM.changeStatus(id)
}

taskList.addEventListener('click', (e) => {
    if(e.target.closest('li')){
    let id = Number(e.target.closest('li').dataset.id)
    changeStatus(id)
    }
    else return
})
