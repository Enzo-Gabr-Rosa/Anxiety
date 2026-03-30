console.log("JS carregado");

let correctValue1 = false;
let correctValue2 = false;
let correctValue3 = false;

function jackpot(maxValue, divId){

    let valorSorteado = Math.floor(Math.random() * (maxValue - 0 + 1)) + 0;
    let numeroDiv = document.getElementById(divId);
    
    numeroDiv.innerHTML = valorSorteado;

    if(valorSorteado == maxValue === 1){
        
        

    }

}
let valorObjetivo = 10;

function fakeJackpot(){
    const slot4 = document.getElementById("slot4");
    const prompt = document.getElementById("prompt");
    let valorSorteado = 0;

    do {
        valorSorteado = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
    } while (valorSorteado === valorObjetivo);

    slot4.innerHTML = valorSorteado;
    valorObjetivo += 10;
    prompt.innerHTML = `Expected value: ${valorObjetivo}/${valorObjetivo}`
}