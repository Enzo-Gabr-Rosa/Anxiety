console.log("JS carregado");

let correctValue1 = false;
let correctValue2 = false;
let correctValue3 = false;

//Jackpot/Sorteio
function jackpot(maxValue, divId) {
  let valorSorteado = parseInt(Math.random() * (maxValue - 0 + 1) + 0);
  let numeroDiv = document.getElementById(divId);

  numeroDiv.innerHTML = valorSorteado;

  // Tentativa / "Giro"

  if (maxValue === 10) {
    if (valorSorteado === 10) {
      numeroDiv.classList.add("correct");
      verificacaoAcerto(divId, true);
    } else {
      numeroDiv.classList.remove("correct");
      verificacaoAcerto(divId, false);
    }
  } else if (maxValue == 25) {
    if (valorSorteado === 25) {
      numeroDiv.classList.add("correct");
      verificacaoAcerto(divId, true);
    } else {
      numeroDiv.classList.remove("correct");
      verificacaoAcerto(divId, false);
    }
  } else if (maxValue == 100) {
    if (valorSorteado === 100) {
      numeroDiv.classList.add("correct");
      verificacaoAcerto(divId, true);
    } else {
      numeroDiv.classList.remove("correct");
      verificacaoAcerto(divId, false);
    }
  } else {
  }
}

function verificacaoAcerto(slot, value) {
  {
    if ((slot === "slot1") & (value === true)) {
      correctValue1 = true;
    } else if ((slot === "slot2") & (value === true)) {
      correctValue2 = true;
    } else if ((slot === "slot3") & (value === true)) {
      correctValue3 = true;
    } else if ((slot === "slot1") & (value === false)) {
      correctValue1 = false;
    } else if ((slot === "slot2") & (value === false)) {
      correctValue2 = false;
    } else if ((slot === "slot3") & (value === false)) {
      correctValue3 = false;
    }

    if (
      (correctValue1 == true) &
      (correctValue2 == true) &
      (correctValue3 == true)
    ) {
      sucesso2();
    }
  }
}
let valorObjetivo = 10;


function fakeJackpot() {
  const slot4 = document.getElementById("slot4");
    const prompt = document.getElementById("prompt");
    let valorSorteado = 0;

    do {
      valorSorteado = Math.floor(Math.random() * (valorObjetivo - 0 + 1)) + 0;
    } while (valorSorteado === valorObjetivo);

    slot4.innerHTML = valorSorteado;
    valorObjetivo += 3;
    prompt.innerHTML = `Expected value: ${valorObjetivo}/${valorObjetivo}`;
  }


function sucesso2() {
  let botaoContinuar2 = document.getElementById("next2");
  botaoContinuar2.disabled = false;

  botaoContinuar2.innerHTML = '<a href="../mg3/minigame3.html">Continue<a/>';
}