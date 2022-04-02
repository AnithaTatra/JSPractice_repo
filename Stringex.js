//concat() combines two strings
const txt = "Hello";
const txt1 = "Everyone";
const result = "!This is JavaScript..";
console.log(txt.concat(" ",txt1," ",result));
//endWith()
let text = "Hello World, Welcome to the Universe";
console.log(text.endsWith("World",11));
console.log(text.endsWith("welcome",10));
console.log(text.startsWith("Hello"));
//fromCharCode()
let str = String.fromCharCode(65,78,73);
console.log(str);
//trim()
let str1 = "      JavaScript Programming Language      ";
console.log(str1.trim());
//split()
let value = "How are You doing today?";
console.log(value.split(""));
