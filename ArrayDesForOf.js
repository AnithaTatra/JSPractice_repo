//ArrayDestructuring using for of loop
const people = [
    {
   name : "MikeSmith",
   family :{
       father : "AdamSmith",
       mother : "HernySmith",
   },
   age:30
    },
    {
  name:"WilliamRonald",
  family :{
      father : "RichardRonald",
      mother : "RossyRonald"
  },
  age : 38
    }
];
for(const{name:n,family:{father:f},age:a}of people){
    console.log('Name: ' + n+ ' ,Father: '+ f+' ,Age:'+a);
}

