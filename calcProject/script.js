const operators = ['+', '-', '*', '/']
// val = '0'
// let btn = Array.from(document.querySelectorAll('.btn'))
// let outputScreen = document.querySelector('.output')
// let exp = ''
// let outputValue = ''
// const maxLength = 12

// const renderOutput = (val) => {
//     if(outputScreen.textContent.length >= maxLength && val !== '=' && val !== 'C') {alert("Limit reached")}
//     else if (outputScreen.textContent == '0') {
//         if (val == '.') outputScreen.textContent += val
//         else outputScreen.textContent = val
//     }
//     else if (val == '=') { outputScreen.textContent = calculate(outputValue) }
//     else if (val == 'C') { outputScreen.textContent = '0' }
//     else {
//         outputScreen.textContent += val
//     }
// }

// function calculate(value) {
//     exp = value
//     let newOp = ''
//     let result = 0
//     for (let i = 0; i < exp.length; i++) {
//         if (operators.includes(exp[i])) {
//             newOp = exp[i]
//         }
//     }

//     if (newOp == '') console.log("Operator Does not Exist");
//     else {
//         let newExp = exp.split(newOp)
//         let a = Number(newExp[0])
//         let b = Number(newExp[1])
//         switch (newOp) {
//             case '+': result = a + b; break;
//             case '-': result = a - b; break;
//             case '*': result = a * b; break;
//             case '/': result = a / b; break;
//             default: console.log("Invalid operator"); break;
//         }

//     }
//     return result
// }

// function display() {
//     renderOutput(val)
//         btn.forEach((btn) => {
//             btn.addEventListener('click', (e) => {
//                 let input = e.target.innerText
//                 renderOutput(input)
//                 outputValue = outputScreen.textContent
//                 // console.log(outputScreen.textContent.length)
//             })
//         })
// }

// display()

exp = '1+2*3'
let result = 0
let splittedExp = exp.split('')
let i
let newOps = []
let newNums = []
for(i=0;i<splittedExp.length;i++) {
    operators.includes(splittedExp[i]) ? newOps.push(splittedExp[i]) : newNums.push(splittedExp[i])
}
console.log(newNums);
console.log(newOps);