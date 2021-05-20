const {exec}=require("child_process");
class WebPackDonePlugin{

    apply(complier){

        complier.hooks.done.tap("Done Web Pack Plugin",(stats)=>{

            console.log("Done With Compilation");
            exec("node build/index.js",(error,stdout,stderr)=>{

                    console.log(`stdout: ${stdout}`);

            });
        });

    }
}

module.exports=WebPackDonePlugin;