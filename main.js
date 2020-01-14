window.onload = function() {
    const randomColor = function () {
        let letter = '0123456789ABCDEF';
        let colorCode = "#";
    
        for (let i = 0; i < 6; i++) {
            colorCode += letter[Math.floor(Math.random()*16)]
        } return colorCode;
    } 
    
    console.log(randomColor())
 
    // document.getElementById("top__color").style.backgroundColor = randomColor()
    document.querySelector("div.top").style.backgroundColor = randomColor();
    document.querySelector("color__display").style.backgroundColor = randomColor();
    
}

