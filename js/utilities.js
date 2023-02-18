// * Get input element value:
function getInputElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value ;
    const elementValue = parseFloat(elementValueString);
    if(elementValue < 0){
        alert("please provide positive number.")
        return getInputElementValueById ();
    }
    element.value ="";
    if(isNaN(elementValue)){
        alert("Please provide a number.")
        return getInputElementValueById();
    }
    return elementValue;
};

// * Set Text Element value:
function setTextElementValue(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
};

// * Get result area element by id:
function getResultAreaElementById(elementId){
    const resultArea =document.getElementById(elementId);
    return resultArea;
};

// * Get Random color by mouseenter event:
function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color ='#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
};

// * set random color:
function setRandomColor(cardId){
    document.getElementById(cardId).style.backgroundColor = getRandomColor();
};

// * get previous white background color:
const previousColor =document.getElementById("triangle-card").style.backgroundColor;
function getPreviousColor(cardId){
    document.getElementById(cardId).style.backgroundColor =previousColor;
};