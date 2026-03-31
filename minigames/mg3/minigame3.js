const duration = 180;

function startTimer(){
    let currentDuration = duration;

    const timer = setInterval(() => {
        currentDuration--;
        document.querySelector('.timerDisplay p').innerHTML = currentDuration;

        if(currentDuration <= 0){
            clearInterval(timer);
            secondTimer();
        }

    }, 1000);
}

function secondTimer(){}