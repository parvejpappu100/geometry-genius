// * Get input element value:
function getInputElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value ;
    const elementValue = parseFloat(elementValueString);
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