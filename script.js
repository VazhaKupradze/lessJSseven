"use strict";

// // Accordion
// let accordionBlock = document.querySelectorAll('.div-block');
// accordionBlock.forEach(function (element) {
//     element.addEventListener("click", function () {
//         this.classList.toggle("active");
//         this.classList.toggle('active-div')
//     });
// });




let accBlock = document.querySelectorAll('.box');

for (let item of accBlock) {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
    })
}