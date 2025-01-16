
// function add() {
//     let num1 = document.getElementById("n1").value
//     let num2 = document.getElementById("n2").value

//     c = Number(num1) + Number(num2)
//     document.getElementById("result").value = c
// }

// function sub() {
//     let num1 = document.getElementById("n1").value
//     let num2 = document.getElementById("n2").value

//     c = Number(num1) - Number(num2)
//     document.getElementById("result").value = c
// }

// function mul() {
//     let num1 = document.getElementById("n1").value
//     let num2 = document.getElementById("n2").value

//     c = Number(num1) * Number(num2)
//     document.getElementById("result").value = c
// }

// function div() {
//     let num1 = document.getElementById("n1").value
//     let num2 = document.getElementById("n2").value

//     c = Number(num1) / Number(num2)
//     document.getElementById("result").value = c
// }


function calculate(operation) {
    let num1 = Number(document.getElementById("n1").value);
    let num2 = Number(document.getElementById("n2").value);
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
            break;
    }

    document.getElementById("result").value = result;
}


