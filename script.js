"use strict";
let questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  let btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item != question) {
        item.classList.remove("show-answer");
      }
    });
    question.classList.toggle("show-answer");
  });
});
