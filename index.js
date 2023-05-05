const form = document.getElementById("form");
let totalSeconds;
let interval;

function countDown() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconde = totalSeconds % 60;

  const sec = seconde < 10 ? "0" + seconde : seconde;

  countdownDisplay.textContent = `${minutes} : ${sec}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "BBBBBBBBBBBBBBBuuuuuuuuuuut";
    clearInterval(interval);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("whaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
