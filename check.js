var score = localStorage.getItem("score");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");

if (score === "100") {
  number1.innerText = 1;
}
number2.innerText = score[1];

number3.innerText = score[2];
number4.innerText = "%";

document.getElementById("gotomain").onclick = function () {
  localStorage.clear();
  window.location.href = "input.html";
};
