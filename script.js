document.addEventListener("DOMContentLoaded", function ()
{
let outputScreen = document.getElementById("result");

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


document.addEventListener("keydown",function(event){

    if(/^[a-zA-Z]$/.test(event.key))
    {
        alert("Only numbers are allowed");
    }
});

document.getElementById('mplus').addEventListener('click',()=>{
result = parseInt(num1)+parseInt(num2);
document.getElementById('result').textContent = 'Result : ${result}';
});