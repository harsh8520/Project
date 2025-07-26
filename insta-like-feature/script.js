let like = document.querySelector('#like')
let liked = document.querySelector('#like-fill')
let post = document.querySelectorAll('img')
let bigLike = document.querySelector('#big-like')
let isLiked = 0

like.addEventListener('click', () => {
    let rand = Math.floor(Math.random() * 71) - 35
    if (isLiked == 0) {
        liked.style.visibility = "visible"
        liked.style.visibility = "visible"
        
        bigLike.style.fontSize = "10rem"
        bigLike.style.transform = `translate(-50%,-50%) rotate(${rand}deg)`

        setTimeout(() => {
            bigLike.style.fontSize = "0"
        }, 400)
        isLiked = 1
    }
    else {
        liked.style.visibility = "hidden"
        isLiked = 0
    }
})

post[1].addEventListener('dblclick', (e) => {  
    let rand = Math.floor(Math.random() * 71) - 35
    let rand2 = Math.floor(Math.random() * 11) + 5

        liked.style.visibility = "visible"
        bigLike.style.fontSize = `${rand2}rem`
        bigLike.style.transform = `translate(-50%,-50%) rotate(${rand}deg)`
        setTimeout(() => {
            bigLike.style.fontSize = "0"
        }, 400)
       isLiked = 1
    
})