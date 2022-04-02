var arr = ["Hello","World"];
var[one,two] = arr;
console.log(one);
console.log(two);

var colors = ["red","blue","Indigo","violet"];
var[color1,color2,,color4] = colors;
console.log(color1);
console.log(color2);
console.log(color4);
 
let x,y;
[x=10,y=20]=[100];
console.log(x);
console.log(y);
//swapping variables
let a=10,b=20;
[a,b]=[b,a];
console.log(a);
console.log(b);
//rest operator
var num = [10,20,30,40,50];
var[a1,b1,...args] =num;
console.log(a1);
console.log(b1);
console.log(...args);










