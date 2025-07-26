let btn = document.querySelectorAll(".btn")
let output = document.querySelector('p')

btn.forEach((e) => {
    e.addEventListener('click', () => {
        let inp = e.textContent
        
        if (inp == "C") {
            output.textContent = "0"
        }
        else if (output.innerText === "0") {
            output.innerText = inp
        }
        else if (inp === "=") {
            try {
                output.textContent = eval(output.textContent)
            }
            catch (e) {
                output.textContent = "Error"
                }
        }
        else if (inp == "÷") {
            inp = "/"
        }
        else {
            output.textContent += inp
        }
        
    })
})