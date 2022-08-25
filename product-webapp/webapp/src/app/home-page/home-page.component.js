document.querySelectorAll(".carousel").forEach(carousel =>{
const items = carousel.querySelectorAll(".carousel_item");
const buttonsHtml = Array.from(items,() =>{
return '<span class = "carousel_button"></span>';
});

carousel.insertAdjacentHTML("beforeend",'<div class = "carousel_nav"> ${buttonsHtml.join("")}</div>');

const buttons = carousel.querySelectorAll(".carousel_button");

buttons.forEach((buutton,i) =>{
buutton.addEventListener("click",() => {
    // un-select all the items
    items.forEach(item => item.classList.remove("carousel_item_selected"));
    buttons.forEach(button => button.classList.remove("carousel_button_selected"));
});
});
});
rightNav.forEach(function (button,index){
    button.addEventListener('click',function(e){
        this.style.background= '#1976d2';
        this.style.color = '#fff';
    });
});