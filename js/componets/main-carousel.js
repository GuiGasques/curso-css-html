const btn_right = window.document.querySelector(".button-arrow._right");
const btn_left = window.document.querySelector(".button-arrow._left");
const elements = window.document.querySelector(".elements");
var pixels = 0; // let ou var serve para declarar a variavel como uma variavel //

btn_right.addEventListener("click",function(){
    pixels += 100;
    elements.style = `transform: translateX(${pixels}px);`
})


btn_left.addEventListener("click",function(){
    pixels -= 100;
    elements.style = `transform: translateX(${pixels}px);`
})