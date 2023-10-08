"use strict";

let plusBtns = document.querySelectorAll("button");

plusBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let allBtns = e.currentTarget.children;
    for (let btn of allBtns) {
      btn.classList.toggle("show-answer");
    }
    btn.nextElementSibling.classList.toggle("show-answer");
  });
});
