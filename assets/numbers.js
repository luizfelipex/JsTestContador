var currentNumber = 0;

function increment(){
    updateDysplay(++currentNumber);
}

function decrement(){
    updateDysplay(--currentNumber);
}

function updateDysplay(number) {
    document.getElementById("currentNumber").innerHTML = number;
}