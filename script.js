document.addEventListener("DOMContentLoaded", function ()
{
let outputScreen = document.getElementById("output-screen");

window.display = function(num){
    outputScreen.value += num;
};

window.calculate = function(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }

};

window.clearScreen  = function(){
outputScreen.value = "";
};

window.del = function(){
    outputScreen.value = outputScreen.value.slice(0,-1);
};
});