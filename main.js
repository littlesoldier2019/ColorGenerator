window.onload = function() {

    const randomColor = function () {
        let letter = '0123456789ABCDEF';
        let colorCode = "#";
    
        for (let i = 0; i < 6; i++) {
            colorCode += letter[Math.floor(Math.random()*16)]
        } return colorCode;
    } 
     
    
    document.querySelector("div.input").style.backgroundColor = randomColor();
    
    let colorDisplay = document.querySelector(".color__display")
    
    const colorBlock = function (num) {
        for (let i = 0; i < num; i++) {
            let block = document.createElement("div");
            block.classList.add("color__display-item");
            block.style.backgroundColor = randomColor();
            block.textContent = randomColor(); 
            colorDisplay.append(block);
        }
    }

    let clearForm = function() {
        let inputNum = document.getElementById("input__number");
        inputNum.value = "";
    }
 

    let submit = document.getElementById("generate");
   
        submit.onclick = function() {  
        let inputNum = document.getElementById("input__number");
        let num = inputNum.value;

        if (isNaN(num) || num < 5 || num > 100) {
            alert("Enter a valid number from 5 to 100")
        } else {
            colorBlock(num);
        } 
        
        clearForm();
    }
    
    
    let form = document.querySelector(".user__input");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

}

