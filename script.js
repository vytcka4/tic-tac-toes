const main = document.querySelector("main");

const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const container3 = document.querySelector(".container-3");
const container4 = document.querySelector(".container-4");
const container5 = document.querySelector(".container-5");
const container6 = document.querySelector(".container-6");
const container7 = document.querySelector(".container-7");
const container8 = document.querySelector(".container-8");
const container9 = document.querySelector(".container-9");
const winnerText = document.querySelector(".winner");
const resetbtn = document.querySelector(".reset");

const containers = document.querySelectorAll(".containers");
console.log(containers);

let click = 0;
let draw = true;

const createX = function (e) {
  let x = document.createElement("p");
  x.classList.add("x");
  x.innerHTML = "X";
  let o = document.createElement("p");
  o.innerHTML = "O";
  o.classList.add("o");
  if (e.hasChildNodes()) {
    return;
  }
  click++;
  if (click % 2 === 1) {
    e.appendChild(x);
  }
  if (click % 2 === 0) {
    e.appendChild(o);
  }
};

main.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    e.target !== container1 &&
    e.target !== container2 &&
    e.target !== container3 &&
    e.target !== container4 &&
    e.target !== container5 &&
    e.target !== container6 &&
    e.target !== container7 &&
    e.target !== container8 &&
    e.target !== container9
  ) {
    return;
  }

  if (click === 8 && draw === true) {
    winnerText.innerHTML = "Draw";
    winnerText.classList.toggle("hidden");
  }
  createX(e.target);
  checkWinnerX();
  checkWinnerO();
});

//
//
//

const checkWinnerX = function () {
  if (
    container1.querySelectorAll(".x").length > 0 &&
    container2.querySelectorAll(".x").length > 0 &&
    container3.querySelectorAll(".x").length > 0
  ) {
    winnerText.innerHTML = "X is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container4.querySelectorAll(".x").length > 0 &&
    container5.querySelectorAll(".x").length > 0 &&
    container6.querySelectorAll(".x").length > 0
  ) {
    winnerText.innerHTML = "X is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container7.querySelectorAll(".x").length > 0 &&
    container8.querySelectorAll(".x").length > 0 &&
    container9.querySelectorAll(".x").length > 0
  ) {
    winnerText.innerHTML = "X is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container1.querySelectorAll(".x").length > 0 &&
    container4.querySelectorAll(".x").length > 0 &&
    container7.querySelectorAll(".x").length > 0
  ) {
    winnerText.innerHTML = "X is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container2.querySelectorAll(".x").length > 0 &&
    container5.querySelectorAll(".x").length > 0 &&
    container8.querySelectorAll(".x").length > 0
  ) {
    winnerText.innerHTML = "X is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container3.querySelectorAll(".x").length > 0 &&
    container6.querySelectorAll(".x").length > 0 &&
    container9.querySelectorAll(".x").length > 0
  ) {
    winnerText.innerHTML = "X is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container1.querySelectorAll(".x").length > 0 &&
    container5.querySelectorAll(".x").length > 0 &&
    container9.querySelectorAll(".x").length > 0
  ) {
    winnerText.innerHTML = "X is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container3.querySelectorAll(".x").length > 0 &&
    container5.querySelectorAll(".x").length > 0 &&
    container7.querySelectorAll(".x").length > 0
  ) {
    winnerText.innerHTML = "X is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
};

//
//
//

const checkWinnerO = function () {
  if (
    container1.querySelectorAll(".o").length > 0 &&
    container2.querySelectorAll(".o").length > 0 &&
    container3.querySelectorAll(".o").length > 0
  ) {
    winnerText.innerHTML = "O is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container4.querySelectorAll(".o").length > 0 &&
    container5.querySelectorAll(".o").length > 0 &&
    container6.querySelectorAll(".o").length > 0
  ) {
    winnerText.innerHTML = "O is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container7.querySelectorAll(".o").length > 0 &&
    container8.querySelectorAll(".o").length > 0 &&
    container9.querySelectorAll(".o").length > 0
  ) {
    winnerText.innerHTML = "O is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container1.querySelectorAll(".o").length > 0 &&
    container4.querySelectorAll(".o").length > 0 &&
    container7.querySelectorAll(".o").length > 0
  ) {
    winnerText.innerHTML = "O is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container2.querySelectorAll(".o").length > 0 &&
    container5.querySelectorAll(".o").length > 0 &&
    container8.querySelectorAll(".o").length > 0
  ) {
    winnerText.innerHTML = "O is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container3.querySelectorAll(".o").length > 0 &&
    container6.querySelectorAll(".o").length > 0 &&
    container9.querySelectorAll(".o").length > 0
  ) {
    winnerText.innerHTML = "O is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container1.querySelectorAll(".o").length > 0 &&
    container5.querySelectorAll(".o").length > 0 &&
    container9.querySelectorAll(".o").length > 0
  ) {
    winnerText.innerHTML = "O is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
  if (
    container3.querySelectorAll(".o").length > 0 &&
    container5.querySelectorAll(".o").length > 0 &&
    container7.querySelectorAll(".o").length > 0
  ) {
    winnerText.innerHTML = "O is a winner";
    winnerText.classList.toggle("hidden");
    draw = false;
  }
};

resetbtn.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < 10; i++) {
    let meme = `${container}${i}`.Node;
    console.log(meme);
    // meme.removeChild(meme.firstChild);
    // console.log(container[i]);
  }
});

// containers.forEach((item) =>
//   item.addEventListener("click", function (item) {
//     item.preventDefault();
//     console.log("ok");
//     x = document.createElement("b");
//     x.innerHTML = "<p>X<p>";
//     item.appendChild(x);
//   })
// );

// container1.addEventListener("click", function (e) {
//   e.preventDefault();
//   x = document.createElement("b");
//   x.innerHTML = "<p>X<p>";
//   container1.appendChild(x);
// });

// const createX = function () {
//   x = document.createElement("b");
//   x.innerHTML = "<p>X<p>";
//   e.appendChild(x);
// };

// let containers = [];
// for (let i = 1; i < 10; i++) {
//   containers.push(`container${[i]}`);
// }

// containers.forEach((item) =>
//   item.addEventListener("click", function (e) {
//     e.preventDefault();
//     createX();
//   })
// );

//     x = document.createElement("b");
//     x.innerHTML = "<p>X<p>";
//     containers.appendChild(x);
//   })
// );

//   containers.addEventListener("click", function (e) {
//   e.preventDefault();
//   x = document.createElement("b");
//   x.innerHTML = "<p>X<p>";
//   containers.appendChild(x);
// });
// const result = document.querySelector(".result-name");
