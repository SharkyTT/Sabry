const btnRandom = document.querySelector("#random-btn");

function moverAleatoriamente(btn) {
  const x = Math.floor(Math.random() * (window.innerWidth - btn.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - btn.offsetHeight));
  btn.style.position = "absolute";
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
  btn.style.fontWeight = "bolder";
}

btnRandom.addEventListener("mouseenter", function (e) {
  moverAleatoriamente(e.target);
});
