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


if(!localStorage.getItem('calcMemory')){
    localStorage.setItem('calcMemory', 0);
}

document.getElementById('memory').innerHTML = localStorage.getItem('calcMemory');


    function getDisplayValue() {
      const value = parseFloat(document.getElementById('result').value);
      return isNaN(value) ? 0 : value;
    }
     function updateMemoryDisplay() {
      document.getElementById('memory').innerText = localStorage.getItem('calcMemory');
    }


     function memoryAdd() {
      const current = parseFloat(localStorage.getItem('calcMemory') || '0');
      const newValue = current + getDisplayValue();
      localStorage.setItem('calcMemory', newValue.toString());
      updateMemoryDisplay();
    }



       function memorySubtract() {
      const current = parseFloat(localStorage.getItem('calcMemory') || '0');
      const newValue = current - getDisplayValue();
      localStorage.setItem('calcMemory', newValue.toString());
      updateMemoryDisplay();
    }

    function memoryClear() {
      localStorage.setItem('calcMemory', '0');
      updateMemoryDisplay();
    }