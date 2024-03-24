/* 
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string truthy other than empty string
4. '0', 'false'
5.{} empty object => true
    {n:2, R: 23}=> true
6. [] empty array => true
    [3, 4, 5] => true
 */
/* 
Falsy: 
1. false
2. 0 -is False
3. ''(empty string)
4. undefined
5. null
*/
let x = null;
console.log(x);
if(x){
    console.log('value of x is truthy');
}else{
    console.log('value of x is falsy');
}

//optional
//check falsy
const y = '';
if(!y){
    console.log('falsy');
}

//check truthy
const z = 3;
if(!!z){
    console.log('truthy');
}
