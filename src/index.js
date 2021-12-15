var modalBtn = document.querySelector(`.button`);
var modalbg = document.querySelector(`.modal-bg`);
var modalClose = document.querySelector(`.modal-close`);
modalBtn.addEventListener(`click`, function () {
  modalbg.classList.add(`bg-active`);
});
modalClose.addEventListener(`click`, function () {
  modalbg.classList.remove(`bg-active`);
});
