//Shallow Copy

const show = {id:2,name:"Richard"};
const copy = show;
copy.id = 14;
console.log("shallow Copy..",show);

//deep copy
 let a=10;
 let b=a;
 a=20;
 console.log("a="+a);
 console.log("b="+b);