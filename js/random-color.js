// * Add random background color of Triangle card:
document.getElementById("triangle-card").addEventListener("mouseenter",function(){
    setRandomColor("triangle-card");
});
document.getElementById("triangle-card").addEventListener("mouseleave",function(){
    getPreviousColor("triangle-card")
});

