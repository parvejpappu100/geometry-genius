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
});

// * add random background color of rhombus card:
document.getElementById("rhombus-card").addEventListener("mouseenter",function(){
    setRandomColor('rhombus-card');
});
document.getElementById("rhombus-card").addEventListener('mouseleave',function(){
    getPreviousColor("rhombus-card");
});

// * add random background color of Pentagon card:
document.getElementById("pentagon-card").addEventListener("mouseenter",function(){
    setRandomColor('pentagon-card');
});
document.getElementById("pentagon-card").addEventListener("mouseleave",function(){
    getPreviousColor("pentagon-card");
});