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
    const getResult = 0.5 * baseTotal * hightTotal;
    // * Set final result in the calculation area:
    setTextElementValue("result-triangle",getResult);
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
    const getResult = widthTotal * lengthTotal;
    // *  Set final result in the calculation area:
    setTextElementValue("result-reactangle",getResult);
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
    const finalResult = parallelogramBaseTotal * parallelogramHigtTotal;
    // * set final result value in parallelogram calculation area:
    setTextElementValue("result-parallelogram",finalResult);
});

