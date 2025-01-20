var a = () => {
    console.log("abc");
}
a();
console.log("______________");

var g = () => 12;
console.log(g())
console.log("______________");

console.log(`my name is kartik ${10+11}`)
console.log("______________");

function abc(num) {
    console.log(num)
}
abc(1234)
abc(234)
abc()

console.log("______________");
function kk(a=5, b=3) {
    console.log(a,b);
}

kk(5,6)
kk(1,0)
kk()
console.log("______________");


console.log("Destructuring");
var a = [1,2,3,4]
var [q,w,e,r] = a
console.log(q,w,e,r)

console.log("______________");

var z = {
    "name": "kartik",
    "age": 21
  };
  
  var { name, age } = z;
  console.log(name); 
  console.log(age);

console.log("______________");

var ac = [1,2,3];
var [bn,,df] = ac
console.log(bn,df)

console.log("______________");
// spread
arr1 = [1,2,3,4,5,6]
arr2 = [0 , ...arr1 ,7]
console.log(arr2)

