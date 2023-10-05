"use strict";

let plusBtns = document.querySelectorAll("button");
let answers = document.querySelectorAll(".answer");

plusBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let key = Object.keys(plusBtns).find(
      (k) => plusBtns[k] === e.currentTarget
    );
    answers[key].style.display = "block";

    /* btn.children[0].classList.remove("fa-square-plus");
    btn.children[0].classList.add("fa-square-minus"); */
  });
});
