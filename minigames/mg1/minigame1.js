function startRace(choice) {
  const buttons = document.querySelectorAll(".button-race");
  const balls = document.querySelectorAll(".ball");
  let winner = null;
  //Desativar botões
  buttons.forEach((btn) => (btn.disabled = true));
  
  
  balls.forEach((ball) => {
    let pos = 0;
    const limit = ball.parentElement.offsetWidth - 40;
    
    let speed;
    
    if (ball.classList.contains("amarela")) {
      speed = Math.random() * 0.1 + 0.4; // sempre mais rápida
    } else if (ball.classList.contains("roxa")) {
      speed = Math.random() * 0.1 + 0.3;
    } else {
      speed = Math.random() * 0.1 + 0.2; // mais lenta
    }
    
    let race = setInterval(() => {
      pos += speed;
      ball.style.left = pos + "px";
      
      if (pos >= limit && !winner) {
        winner = ball.classList[1];
        clearInterval(race);
        
        setTimeout(() => {
          if (winner === choice) {
            alert("Correct answer!");
            //Reativar botão corrida
            buttons.forEach((btn) => (btn.disabled = false));
            //Ativar botão continuar
            
            sucesso1();
            
          } else {
            alert("You lost! Try again.");
          }
        }, 100);
      }
      
      if (pos >= limit) {
        clearInterval(race);
      }
    }, 50);
  });
}

function sucesso1(){
  let botaoContinuar1 = document.getElementById('next1');
  botaoContinuar1.disabled = false;
  
  botaoContinuar1.innerHTML = '<a href="../mg2/minigame2.html">Continue<a/>';
}