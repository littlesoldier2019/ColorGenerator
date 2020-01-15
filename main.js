window.addEventListener("load",colorGenerator); 

function colorGenerator() {

    const randomColor = function () {
        let letter = '0123456789abcdef';
        let colorCode = "#";
    
        for (let i = 0; i < 6; i++) {
            colorCode += letter[Math.floor(Math.random()*16)]
        } return colorCode;
    } 
    
    
    
    document.querySelector("div.input").style.backgroundColor = randomColor();
    
    let colorDisplay = document.querySelector(".color__display");
    let setTimer;
    
    function colorBlock(num) {
        
        let blockArr = [];

        for (let i = 0; i < num; i++) {
            
            let color = randomColor();

            let block = document.createElement("div");
            block.classList.add("color__display-item");
            block.style.backgroundColor = color;
            colorDisplay.append(block);

            let colorText = document.createElement("p");
            colorText.classList.add("color__display-text");
            colorText.innerText = color;
            block.append(colorText);

            let button = document.createElement("button");
            button.classList.add("color__display-copy");
            button.innerText = "Copy";
            button.value = color;
            block.append(button);

            button.onclick = function() {
                let textArea = document.createElement("textarea");
                textArea.value = button.value;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("Copy");
                textArea.remove();
            }

            blockArr.push(block);

        }

        setTimer = setInterval(function () {
            for (let i = 0; i < num; i++) {
                let colorChange = randomColor()
                blockArr[i].style.backgroundColor = colorChange;
                blockArr[i].querySelector("p").innerText = colorChange; 
                blockArr[i].querySelector("button").value = colorChange;
            }     
        }, 2000)
    }
  
    
    function clearForm() {
        if (colorDisplay.childElementCount != 0) {
            colorDisplay.innerHTML = "";
        }
    }

    
    let submit = document.getElementById("generate");
    submit.addEventListener("click", generateColor);

    function generateColor() {  
        let inputNum = document.getElementById("input__number");
        let num = inputNum.value;


        if (isNaN(num) || num < 5 || num > 100) {
            alert("Enter a valid number from 5 to 100")
        } else {
            clearForm();
            colorBlock(num);
        }    
    }

    let stop = document.getElementById("stop");
    stop.addEventListener("click", stopTimer);

    function stopTimer() {
        clearInterval(setTimer);
    }

    let form = document.querySelector(".user__input");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    
}

