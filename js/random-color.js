// * Add random background color of Triangle card:
document.getElementById("triangle-card").addEventListener("mouseenter",function(){
    setRandomColor("triangle-card");
});
document.getElementById("triangle-card").addEventListener("mouseleave",function(){
    getPreviousColor("triangle-card")
});

// * add random background color of ractangle card:
document.getElementById("reactangle-card").addEventListener("mouseenter",function(){
    setRandomColor("reactangle-card");
});
document.getElementById("reactangle-card").addEventListener("mouseleave",function(){
    getPreviousColor("reactangle-card");
});

// * add random background color of Parallelogram card:
document.getElementById("parallelogram-card").addEventListener("mouseenter",function(){
    setRandomColor("parallelogram-card");
});
document.getElementById("parallelogram-card").addEventListener("mouseleave",function(){
    getPreviousColor("parallelogram-card");
})