const timerDisplay = document.querySelector(".timerDisplay p");
const slot = document.querySelector(".timerDisplay");
const duration = 180; // 3 minutos
const buttonStart = document.getElementById("start");
const buttonContinue = document.getElementById("next3");

buttonStart.addEventListener("click", startTimer);

function startTimer() {
  slot.classList.remove("atention");
  let currentDuration = duration;
  timerDisplay.textContent = currentDuration;
  buttonStart.disabled = true;
  buttonContinue.disabled = true;

  const timer = setInterval(() => {
    currentDuration--;
    timerDisplay.textContent = currentDuration;

    if (currentDuration <= 0) {
      clearInterval(timer);
      secondTimer();
    }
  }, 1000);
}

function secondTimer() {
  success();
  buttonContinue.disabled = false;
  let currentDuration = 2;
  timerDisplay.textContent = currentDuration;
  slot.classList.add("atention");

  const secondTimerId = setInterval(() => {
    currentDuration--;
    timerDisplay.textContent = currentDuration;

    if (currentDuration <= 0) {
      clearInterval(secondTimerId);
      slot.classList.remove("atention");
      timerDisplay.textContent = duration;
      buttonStart.disabled = false;
      buttonContinue.disabled = true;
    }
  }, 1000);
}

function success() {
  buttonContinue.disabled = false;
  buttonContinue.textContent = "Continue";
  buttonContinue.onclick = () => {
    window.location.href = "../../textPages/mainPage.html"; // ajustar para a página certa
  };
}