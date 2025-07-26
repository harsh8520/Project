let lastScroll = 0
let header = document.querySelector('header')
window.addEventListener('scroll',(e)=>{
    let currentScroll = window.scrollY

    if(currentScroll > lastScroll) {
        console.log("down");
        header.style.transform = 'translateY(-100%)'
    }
    else {
        console.log("up");
        header.style.transform = 'translateY(0%)'
    }

    lastScroll = currentScroll
})