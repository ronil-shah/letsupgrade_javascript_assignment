//var is a global scope and in that we can redeclare and reassign the variable
var a = 1;
console.log(a);
a = 2;
console.log(a);
var a = 3;
console.log(a);

{
    var a = 4;
    console.log(a);
}
console.log(a);
//Let is a block scope and in this we can reassign the variable but we cannot redeclare the variable
let b = 1;
console.log(b);
b = 2;
console.log(b);
{
    let b = 4;
    console.log(b);
}
console.log(b);
//const is also a block scope but in const we cannot redeclare and reassign the variable
const c = 1;
console.log(c);
{
    const c = 4;
    console.log(b);
}
console.log(c);