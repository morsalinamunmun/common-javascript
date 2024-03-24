/*
8 ways to get undefine
1. variable that is not initialized will give undefined
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that does not exits on an object will give you undefined
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined
*/

let first;
function second(a, b){
    const total = a + b;
}
const result = second();
//console.log(result);

function third(a, b, c, d){
    const to = a+b+c+d;
    //console.log(a, b, c, d);
}
third(2, 5);

function noNegative(a, b){
    if(a < 0 ||  b < 0){
        return
    }
    return a + b;
}
const add = noNegative(2, -4);

const fifth = {id:2, name: 'Munia', age: 20}
//console.log(fifth.age, fifth.salary);

const sixth = [3, 4, 8, 5, 20, 42,];
//you should not do it. Instead use splice
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[100], sixth[2]);
console.log(sixth); //avabe delete korle array modde empty gorto hobe

//kono data nai ba set kora hoy nai sekhetre nall set korte hoy
const eighth = undefined;
const eighthU = null;
const data = {result: [], updated: null}
console.log(typeof undefined); //output: undefined
console.log(typeof null) // output: object