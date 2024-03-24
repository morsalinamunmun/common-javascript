//arguments array like object
//arguments not push element because this is array like object, but not array
function sum(a, b, c){
    //console.log(arguments); //special method
    //console.log(arguments[1]);
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}
const total = sum(34, 23, 35, 43, 67);
console.log(total);
//console.log(sum.length); //sum is function, function length is function parameters count 3(a, b, c)
