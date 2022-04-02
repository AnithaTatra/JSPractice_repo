//Asynchronous function
function add(a,b){
   try{
       var x = new Promise(async function(resolve,reject){
           try{
               let y = 1;
               if(y==1){
                   resolve("success");
               }else{
                   reject("Failure");
               }
           }catch(err){
               reject("failed");
           }
       })
       return x;
   }catch(err){
       console.log(err.message);
       return err.message;
   }
} 
  console.log(add(5,6));