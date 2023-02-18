// * Triangle:
// * set add event listener to the triangle calculate btn:
document.getElementById("calculate-triangle").addEventListener('click',function(){
    // * Get base total value:
    const baseTotal = getInputElementValueById("base-total");
    // * set base total value in b:
    setTextElementValue("base",baseTotal);
    // * Get hight total:
    const hightTotal = getInputElementValueById("higit-total");
    // * Set higit total value in h:
    setTextElementValue("hight",hightTotal);
    // * Get final result:
    const getResult = (0.5 * baseTotal * hightTotal).toFixed(2);
    // * Set final result in the calculation area:
    setTextElementValue("result-triangle",getResult);
    // * Get result area:
    const triangleResultArea = getResultAreaElementById("triangle-result-area");
    // * display block result area:
    triangleResultArea.style.display = "block";
});

// * Reactangle:
// * set add event listener to the Reactangle calculate btn:
document.getElementById("calculate-reactangle").addEventListener('click',function(){
    // * Get width total value:
    const widthTotal = getInputElementValueById("width-total");
    // * Set width total value in w:
    setTextElementValue("width",widthTotal);
    // * Get length total value:
    const lengthTotal = getInputElementValueById("length-total");
    // * Set length total value in l:
    setTextElementValue('length',lengthTotal);
    // * Get the final result:
    const getResult = (widthTotal * lengthTotal).toFixed(2);
    // *  Set final result in the calculation area:
    setTextElementValue("result-reactangle",getResult);
    // * Get result area:
    const reactangleResultArea = getResultAreaElementById("reactangle-result-area");
    // * display block result area:
    reactangleResultArea.style.display = "block";
});

// * Parallelogram:
// * set add event listener to the Parallelogram calculate btn:
document.getElementById("calculate-parallelogram").addEventListener("click",function(){
    // * Get parallelogram base total value:
    const parallelogramBaseTotal =getInputElementValueById("parallelogram-base-total");
    // * set parallelogram base total value in b:
    setTextElementValue("parallelogram-base",parallelogramBaseTotal);
    // * Get parallelogram hight total:
    const parallelogramHigtTotal = getInputElementValueById("parallelogram-hight-total");
    // * set parallelogram-hight-total value in h:
    setTextElementValue("parallelogram-hight",parallelogramHigtTotal);
    // * Get final result:
    const finalResult = (parallelogramBaseTotal * parallelogramHigtTotal).toFixed(2);
    // * set final result value in parallelogram calculation area:
    setTextElementValue("result-parallelogram",finalResult);
    // * Get result area:
    const parallelogramResultArea = getResultAreaElementById("parallelogram-result-area");
    // * display block result area:
    parallelogramResultArea.style.display = "block";
});

// * Rhombus:
// * set add event listener to the Rhombus calculate btn:
document.getElementById("calculate-rhombus").addEventListener("click",function(){
    // * Get the value of d1 from the input field:
    const rhombusD1Total = getInputElementValueById("rhombus-d1-total");
    // * set the value of d1:
    setTextElementValue("rhombus-d1",rhombusD1Total);
    // * Get the value of d2 from the input field:
    const rhombusD2Total = getInputElementValueById("rhombus-d2-total");
    // * set the value of d2:
    setTextElementValue("rhombus-d2",rhombusD2Total);
    // * Get the final result:
    const finalResult = (0.5 * rhombusD1Total * rhombusD2Total).toFixed(2);
    // * set the final result in rhombus calculation area:
    setTextElementValue("result-rhombus",finalResult);
    // * Get result area:
    const rhombusResultArea = getResultAreaElementById("rhombus-result-are");
    // * display block result area:
    rhombusResultArea.style.display = "block";
});

// * Pentagon:
// * set add event listener to the Pentagon calculate btn:
document.getElementById("calculate-pentagon").addEventListener("click",function(){
    // * Get the range value:
    const rangeValue = getInputElementValueById("pentagon-range-total");
    // * set the value of range in p:
    setTextElementValue("range",rangeValue);
    // * get the value of perpendicular distance :
    const perpendicularDistanceTotal = getInputElementValueById("perpendicular-distance-total");
    // * set perpendicular-distance-total value into perpendicular-distance:
    setTextElementValue("perpendicular-distance",perpendicularDistanceTotal);
    // * get final resut:
    const finalResult = (0.5 * rangeValue * perpendicularDistanceTotal).toFixed(2);
    // * set the final result:
    setTextElementValue("result-pentagon",finalResult);
     // * Get result area:
     const pentagonResultArea = getResultAreaElementById("pentagon-result-area");
     // * display block result area:
     pentagonResultArea.style.display = "block";
});

// * Ellipse:
// * set add event listener to the Ellipse calculate btn:
document.getElementById("calculate-ellipse").addEventListener("click",function(){
    // * get the value of a from the input field:
    const valueOfA = getInputElementValueById("value-of-a-field");
    // * set the valueOfA into a:
    setTextElementValue("value-of-a",valueOfA);
    // * get the value of b from the input field:
    const valueOfB = getInputElementValueById("value-of-b-field");
    // * set the valueOfB into b:
    setTextElementValue("value-of-b",valueOfB);
    // * get the final result:
    const finalResult = (3.14 * valueOfA * valueOfB).toFixed(2);
    // * set the final result:
    setTextElementValue("result-ellipse",finalResult);
    // * Get result area:
    const ellipseResultArea = getResultAreaElementById("ellipse-result-area");
    // * display block result area:
    ellipseResultArea.style.display = "block";
});