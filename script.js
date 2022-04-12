"use strict";

const modal = document.querySelector(".modal");
const bntCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);

  bntCloseModal.addEventListener("click", closeModal);
}
