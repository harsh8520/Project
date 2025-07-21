let ansKey = [
    {
        correct: 'Paris',
        incorrect: 'London',
        incorrect: 'Rome',
        incorrect: 'Berlin'
    },
    {
        incorrect: 'Venus',
        correct: 'Mars',
        incorrect: 'Jupiter',
        incorrect: 'Saturn'
    },
    {
        correct: 'Hyper Text Markup Language',
        incorrect: 'High Tech Modern Language',
        incorrect: 'Hyperlink Text Management Logic',
        incorrect: 'Hyper Tool Mark Language'
    },
    {
        incorrect: 'CSS',
        incorrect: 'HTML',
        correct: 'Python',
        incorrect: 'SQL'
    },
    {
        incorrect: 'Nikola Tesla',
        correct: 'Alexander Graham Bell',
        incorrect: 'Thomas Edison',
        incorrect: 'Isaac Newton'
    }
]
let curr = 0
let score = 0
let li = document.querySelectorAll('li')
let isclicked = false

function answer(text) {
    if (ansKey[curr].correct == text) return 1
    else return 0
}

function disableClick(list) {
    list.forEach(e => {
        e.style.pointerEvents = 'none'
        e.style.userSelect = 'none'
    })
}

function enableClick(){
    li.forEach((e) =>{
        e.style.pointerEvents = 'all'
    })
    isclicked = false
}

function displayNext() {
    let nextBtn = document.querySelectorAll('button')
    let end = nextBtn.length - 1
    nextBtn.forEach(next => {
        next.addEventListener('click', (event) => {
            if (curr != end) {
                curr++
                let prevQuestion = document.querySelector(`.question-${curr}`)
                prevQuestion.style.display = 'none'
                let nextQuestion = document.querySelector(`.question-${curr + 1}`)
                nextQuestion.style.display = 'flex'
                enableClick()
            }
            else {
                alert(`You have finished the game. \n Your score is = ${score}`)
            }
        })
    })
}

function selectAnswer() {
    li.forEach((list) => {
        let event = list.addEventListener('click', (e) => {
            let text = e.target.textContent
            if (answer(text)) {
                e.target.classList.add('correct')
                score++
                isclicked = true
            }
            else {
                e.target.classList.add('wrong')
                li.forEach(opt => {
                    if (answer(opt.textContent)) opt.classList.add('correct')
                })
                isclicked = true
            }
            disableClick(li)
        })
    })
}

selectAnswer()
displayNext()