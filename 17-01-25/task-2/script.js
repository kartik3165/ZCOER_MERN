
// var a = new Promise((resolve, reject) => {
//     var num = Math.random(0,20)
//     if (false) {
//         return res()
//     }
//     else {
//         return rej()
//     }
// });

// a
// .then(ret => console.log("result"))
// .catch(e => console.log("errhtfgor"));


console.log("______________");
let num = new Promise((resolve, reject) => {
    var num = Math.floor(Math.random() * 30);
    console.log(num)

    if (num > 18) {
      resolve("Task successful!");
    } else {
      reject("Task failed!");
    }
  });

num
.then(function() { console.log('he is able to drive ')})
.catch(function() { console.log('he is not able to drive ')})


let usernum = new Promise((resolve, reject) => {
    var age = prompt("Enter your age ")
    console.log(age)
    
    document.write(age)
    if (age <= 18) {
      resolve("Task successful!");
    } else {
      reject("Task failed!");
    }
  });

num
.then(function() { console.log('he is able to drive '), document.write(' he is able to drive ')})
.catch(function() { console.log('he is not able to drive', document.write('he is not able to drive '))})