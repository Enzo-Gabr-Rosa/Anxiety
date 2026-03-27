console.log("JS carregado")
function iniciarCorrida(escolha) {
  const bolas = document.querySelectorAll(".bola");
  let vencedor = null;

  bolas.forEach((bola) => {
    let pos = 0;
    const limite = bola.parentElement.offsetWidth - 40;

    let corrida = setInterval(() => {
      let velocidade = Math.random() * 10;
      pos += velocidade;

      bola.style.left = pos + "px";

      if (pos >= limite && !vencedor) {
        vencedor = bola.classList[1];
        clearInterval(corrida);

        setTimeout(() => {
          if (vencedor === escolha) {
            alert("🎉 Você ganhou!");
          } else {
            alert("😢 Você perdeu! Vencedor: " + vencedor);
          }
        }, 100);
      }

      if (pos >= limite) {
        clearInterval(corrida);
      }
    }, 50);
  });
}