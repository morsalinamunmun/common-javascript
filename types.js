//primitive
//strongly typed language
//int a = 5;
//string b = 'Alim hossain';
//bool c = true;
//object student = {name: 'noya khan', id: 54};
//int[] numbers = [12, 45, 78];
//string[] friends = ['abul', 'babul'];

//javascript is a dynamic type language
const a = 5;
const b = 'susma tun';
//non-primitive
const ages = [34, 23, 15, 25];
const student = {id: 23, class: 7}
console.log(typeof a, typeof b, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'}
let q = p;
//q = {job: 'Backend developer'} //output: { job: 'web developer' } { job: 'Backend developer' }
q.job = 'Font-end developer';
console.log(p, q);