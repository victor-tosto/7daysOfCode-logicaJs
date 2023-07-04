let valor1 = '';
let valor2 = '';
let resultado = '';

let operacao = prompt('Escolha a operação que deseja fazer na calculadora, digitando o símbolo: + (soma), - (subtração), * (multiplicação) e / (divisão). Se desejar sair, digite "sair"');


while (operacao != 'sair') {

    while (operacao != '+' && operacao != '-' && operacao != '*' && operacao != '/' && operacao != 'sair') {

        alert('Operação inválida! Digite novamente.');
        operacao = prompt('Escolha a operação que deseja fazer na calculadora, digitando o símbolo: + (soma), - (subtração), * (multiplicação) e / (divisão). Se desejar sair, digite "sair"');
    
    }

    if (operacao == 'sair') {
        break;
    }

    valor1 = parseFloat(prompt('Digite o primeiro valor:'));
    valor2 = parseFloat(prompt('Digite o segundo valor:'));

    if (operacao == '+') {
        somar(valor1, valor2);
    }
    else if (operacao == '-') {
        subtrair(valor1, valor2);
    }
    else if (operacao == '*') {
        multiplicar(valor1, valor2);
    }
    else if (operacao == '/') {
        dividir(valor1, valor2);
    }
    else {
        alert('Operação inválida! Digite novamente.')
    }

    operacao = prompt('Escolha a operação que deseja fazer na calculadora, digitando o símbolo: + (soma), - (subtração), * (multiplicação) e / (divisão). Se desejar sair, digite "sair"');

}

alert('Até a próxima!');

function somar(valor1, valor2) {    
    resultado = valor1 + valor2;
    alert(`Resultado: ${resultado}`);
}

function subtrair(valor1, valor2) {    
    resultado = valor1 - valor2;
    alert(`Resultado: ${resultado}`);
}

function multiplicar(valor1, valor2) {    
    resultado = valor1 * valor2;
    alert(`Resultado: ${resultado}`);
}

function dividir(valor1, valor2) {
    
    if (valor1 == 0 && valor2 == 0) {
        alert('Erro');
    }
    else if (valor2 == 0) {
        alert('Infinito');
    }
    else {
        resultado = valor1 / valor2;
        alert(`Resultado: ${resultado}`);
    }    
}
