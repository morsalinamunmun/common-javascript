//primitive function vitor man change korle bahire folafol change kore but man ager ta dekhai
let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;
    console.log(a, b);
    const result = a * b;
    return result;
}
console.log(num1, num2);
const output = multiply(num1, num2);
console.log(num1, num2);
console.log(output);
//non-primitive (object, array) function vitor man change korle bahire function call korle man change hoy
let student1 = {name: 'Muna', partner: 'Bipul'};
let student2 = {name: 'Mitu', partner: 'Mohon'};
function makeMarriage(couple1, couple2){
    couple1.name = 'Jannat';
    couple2.partner = 'Sakil';
}
console.log(student1, student2);
makeMarriage(student1, student2);
console.log(student1, student2);