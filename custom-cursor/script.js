let cur = document.querySelector('.cursor')

document.body.addEventListener('mousemove',(e)=>{
    let x = e.pageX;
    let y = e.pageY;
    cur.style.display = 'block'
    cur.style.visibility = 'visible'
    cur.style.top = y+'px';
    cur.style.left = x+'px';
    cur.style.transform = 'translate(-50%,-50%)'
    
})

document.body.addEventListener('mouseout',()=>{
    cur.style.visibility = 'hidden'
    cur.style.display = 'none'
})

document.querySelector('h1').addEventListener('mouseenter',()=>{
    cur.classList.add('active')
})

document.querySelector('h1').addEventListener('mouseout',()=>{
    cur.classList.remove('active')
})