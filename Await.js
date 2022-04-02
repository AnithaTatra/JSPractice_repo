//Asynchronous Promise with await
function mul(x,y){
    try{
        var j = new Promise(async function(resolve,reject){
            try{
            let i=2;
            if(i==2){
                resolve("success");
            }else{
                reject("Failure");
            }
        }catch(err){
            reject("Failed");
           }
        });
        return j;
    }catch(err){
        return err.message;
    }
}
async function test(){
    try{
        let d = await mul(12,8);
        console.log(d);
        return d;
    }catch(err){
        return err.message;
    }
}
test();  
