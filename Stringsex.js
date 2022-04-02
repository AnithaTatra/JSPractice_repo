//in-built method localeCompare
let str = "Rose";
let str1 = "Rose";
let strcmp = str.localeCompare(str1);  //localeCompare()=>Compares two strings.returns 0 for equal, -1 before sort & unequal,1 after sort & unequal
console.log(strcmp);
//comparing two strings usings "==" operator
 let x = "Welcome Js";
 let y = "Welcome Js";
 if(x==y){
     console.log("Matched String: " +x);
 }else{
     console.log("Not Matched Strings");
 }
 //CharAt() Method  is for printing specified position character in a string 
 let text ="JavaScript";
 console.log("The Character at position 4 is : "+ text.charAt(4));
 console.log(text.charAt(text.length-1));
//charCodeAt() method is for getting unicode of an specified character
let word = "GoogleMaps";
console.log(word.charCodeAt(1));
