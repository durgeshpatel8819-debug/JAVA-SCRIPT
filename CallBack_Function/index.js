function Greet(){
   console.log("Hello ji"); 
}
function meet(callback){
    console.log("I am a meeting");
    callback();
    console.log("Durgesh");
}
meet(Greet);