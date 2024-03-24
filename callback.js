/* function greeting(person){
    console.log(person);
} */
//const name = 'Halim mama';
//const number = 45;
//const numbers = [45, 34, 23];
//const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
//greeting(numbers);

function greeting(handler, name){
    greetingHandler(name);
}
function greetingHandler(name){
    console.log('good', name);
}

function greetingEven(name){
    console.log('Good evening', name);
}
greeting(greetingHandler, 'Tonu');
greeting(greetingHandler, 'Mirza');
greeting(greetingEven, 'Tom Cruise');

function submitHandler(){
    console.log('Submit button clicked');
}
document.getElementById('btn').addEventListener('click', submitHandler)
