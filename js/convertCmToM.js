document.getElementById("t-convert-btn").addEventListener("click",function(){
    const resultOfCm = getTextElementValue("result-triangle");
    const convertToM = convertCmToM(resultOfCm);
    setTextElementValue("result-triangle",convertToM);
    document.getElementById("t-unit-cm").style.display = "none";
    document.getElementById("t-unit-m").style.display = "block";
    document.getElementById("t-convert-btn").disabled = true; 
});
document.getElementById("r-convert-btn").addEventListener("click",function(){
    const resultOfCm = getTextElementValue("result-reactangle");
    const convertToM = convertCmToM(resultOfCm);
    setTextElementValue("result-reactangle",convertToM);
    document.getElementById("r-unit-cm").style.display = "none";
    document.getElementById("r-unit-m").style.display = "block";
    document.getElementById("r-convert-btn").disabled = true; 
});
document.getElementById("p-convert-btn").addEventListener("click",function(){
    const resultOfCm = getTextElementValue("result-parallelogram");
    const convertToM = convertCmToM(resultOfCm);
    setTextElementValue("result-parallelogram",convertToM);
    document.getElementById("p-unit-cm").style.display = "none";
    document.getElementById("p-unit-m").style.display = "block";
    document.getElementById("p-convert-btn").disabled = true; 
});
document.getElementById("rb-convert-btn").addEventListener("click",function(){
    const resultOfCm = getTextElementValue("result-rhombus");
    const convertToM = convertCmToM(resultOfCm);
    setTextElementValue("result-rhombus",convertToM);
    document.getElementById("rb-unit-cm").style.display = "none";
    document.getElementById("rb-unit-m").style.display = "block";
    document.getElementById("rb-convert-btn").disabled = true;
});
document.getElementById("pg-convert-btn").addEventListener("click",function(){
    const resultOfCm = getTextElementValue("result-pentagon");
    const convertToM = convertCmToM(resultOfCm);
    setTextElementValue("result-pentagon",convertToM);
    document.getElementById("pg-unit-cm").style.display = "none";
    document.getElementById("pg-unit-m").style.display = "block";
    document.getElementById("pg-convert-btn").disabled = true;
});
document.getElementById("e-convert-btn").addEventListener("click",function(){
    const resultOfCm = getTextElementValue("result-ellipse");
    const convertToM = convertCmToM(resultOfCm);
    setTextElementValue("result-ellipse",convertToM);
    document.getElementById("e-unit-cm").style.display = "none";
    document.getElementById("e-unit-m").style.display = "block";
    document.getElementById("e-convert-btn").disabled = true;
});