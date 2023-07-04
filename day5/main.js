let addComida = prompt('Você deseja adicionar uma comida na sua lista de compras? Responda com "sim" ou "não"');

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (addComida == 'sim') {

    let comida = prompt('Qual comida você deseja inserir?');
    let categorias = prompt('Em qual categoria você desseja inserir? (frutas, laticínios, congelados ou doces');

    if (categorias == 'frutas') {
        frutas.push(comida);
    }
    else if (categorias == 'laticínios') {
        laticinios.push(comida);
    }
    else if (categorias == 'congelados') {
        congelados.push(comida);
    }
    else if (categorias == 'doces') {
        doces.push(comida);
    }
    else {
        alert('Categoria inválida');
    }

    addComida = prompt('Deseja adicionar mais comida na sua lista? Responda com "sim" ou "não"');

}

alert(`Lista de compras:\n
Frutas: ${frutas}\n
Laticínios: ${laticinios}\n
Congelados: ${congelados}\n
Doces: ${doces}`);
