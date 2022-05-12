// indicação da variável de numero, indicada no documento HTML
var currentNumber = 0;

// função de adição de incremento, de acordo com o botão de incremento no HTML
function increment(){
    updateDisplay(++currentNumber);
}

// função de subtração de incremento, de acordo com o botão de incremento no HTML
function decrement(){
    updateDisplay(--currentNumber);
}

// função de exibição do resultado entre os botões na página HTML 
function updateDisplay(number) {
    document.getElementById("currentNumber").innerHTML = number;
}