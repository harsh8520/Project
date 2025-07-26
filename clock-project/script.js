let clock = document.querySelector('h1')
let para = document.querySelector('p')
let btn = document.querySelector('button')
let check = 0

function getTime24h() {
    let time = new Date()
    let hours = time.getHours()
    let minute = time.getMinutes()
    let seconds = time.getSeconds()
    let day = time.getDay()

    let date = time.getDate()
    let mod = date % 10

    let monthIndex = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Noovember', 'December']
    let month = monthIndex[time.getMonth()]
    switch (day) {
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        case 7:
            day = "Sunday"
            break;
    }

    switch (mod) {
        case 1:
            date += "st"
            break
        case 2:
            date += "nd"
            break
        case 3:
            date += "rd"
            break
        default:
            date += "th"
            break
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (minute < 10) {
        minute = "0" + minute
    }

    clock.innerText = `${hours}:${minute}:${seconds}`
    para.innerText = `${day}, ${date} ${month}`
}

function getTime12h() {
    let time = new Date()
    let hours = time.getHours()
    let minute = time.getMinutes()
    let seconds = time.getSeconds()
    let day = time.getDay()

    let date = time.getDate()
    let mod = date % 10

    let monthIndex = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Noovember', 'December']
    let month = monthIndex[time.getMonth()]
    switch (day) {
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        case 7:
            day = "Sunday"
            break;
    }

    switch (mod) {
        case 1:
            date += "st"
            break
        case 2:
            date += "nd"
            break
        case 3:
            date += "rd"
            break
        default:
            date += "th"
            break
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (minute < 10) {
        minute = "0" + minute
    }


    if(hours == 0) {
        clock.innerText = `12:${minute}:${seconds} AM`
    }
    else if (hours < 12) {
        if(hours < 10) hours = "0" + hours
        else clock.innerText = `${hours}:${minute}:${seconds} AM`
    }
    else if(hours == 12) {
        clock.innerText = `${hours}:${minute}:${seconds} PM`
    }
    else if (hours > 12) {
        clock.innerText = `${hours - 12}:${minute}:${seconds} PM`
    }
    para.innerText = `${day}, ${date} ${month}`
}

getTime24h()
let int24h = setInterval(getTime24h,1000)
let int12

btn.addEventListener('click',()=>{
    if(check == 0) {
        alert("12 Hour clock mode enabled")
        clearInterval(int24h)
        getTime12h()
        int12 = setInterval(getTime12h,1000)
        check = 1
    }
    else {
        alert("24 Hour clock mode enabled")
        clearInterval(int12)
        getTime24h()
        int24h = setInterval(getTime24h,1000)
        check = 0
    }
})