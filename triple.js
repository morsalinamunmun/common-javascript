//always use ===
//equal comparison doesn't work for non-primitive
//==(check values) and ===(check values and type)
const first = 2;
const second = '2';
if(first == second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}
//== and === difference (type coercion)
//type conversion