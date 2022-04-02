function array(){
    return["A","N","I"];
}
var[x1,y1,z1] = array();
console.log(x1);
console.log(y1);
console.log(z1);

const person ={
    id : 234,
    displayname : "jdoe",
    fullName : {
        firstName : "John",
        lastName : "Doe"
    }
};
function userId({id}){
    return id;
}
console.log(userId(person));
function userName({displayname,fullName:{firstName:firstname,lastName:lastname}}){
    return `${displayname} is ${firstname}${lastname}`;
}
console.log(userName(person));