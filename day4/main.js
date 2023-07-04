const valorCorreto = Math.floor(Math.random() * 11);

let valorUsuario = '';
let acertou = false;

for (let i = 3; i < 0 ; i--) {

    valorUsuario = prompt('Tente adivinhar o número de 0 a 10:');

    if (valorUsuario == valorCorreto) {
        alert('Parabéns, você acertou!!');
        acertou = true;
        break;
    }
    alert('Errado!');
}

if (!acertou) {
    alert(`Infelizmente, você não acertou. O número era ${valorCorreto}!`);
}
