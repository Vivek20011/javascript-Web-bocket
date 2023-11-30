/*
1.to be able to operate on variable,it is importantnto know something about the types of data is called datatypes
2.javascript has 7types datatypes
number
bigint
string
boolean
null
undefiend
symbol
*/
let name="vivek";
let age=24;
let ispresent=true;
let address=null;
console.log(typeof name);
console.log(typeof age);
console.log(typeof ispresent);
console.log(typeof address);
let id=Symbol('123');
let anotherid=Symbol('123');
console.log(id===anotherid);
let score="33"
let score=null;
let score="gift"
let score=true
console.log(typeof score);
let newvar=Number(score);
console.log(typeof newvar);