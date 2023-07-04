let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let comida = '';
let categoria = '';
let remover = '';

let addComida = prompt('Você deseja adicionar uma comida na sua lista de compras? Responda com "sim" ou "não"');

while (addComida != 'sim' && addComida != 'não') {
    alert('Resposta inválida');
    addComida = prompt('Você deseja adicionar uma comida na sua lista de compras? Responda com "sim" ou "não"');
}

while (addComida == 'sim' || addComida != 'não') {

    comida = prompt('Qual comida você deseja adicionar?');
    categoria = prompt('Em qual categoria você deseja inserir? (frutas, laticínios, congelados ou doces');

    if (categoria == 'frutas') {
        frutas.push(comida);
    }
    else if (categoria == 'laticínios') {
        laticinios.push(comida);
    }
    else if (categoria == 'congelados') {
        congelados.push(comida);
    }
    else if (categoria == 'doces') {
        doces.push(comida);
    }
    else {
        alert('Categoria inválida');
    }

    addComida = prompt('Deseja adicionar ou remover itens na sua lista? Responda com "adicionar", "remover" ou "não" se não quiser modificar a lista.');

    while (addComida == 'adicionar') {
        comida = prompt('Qual comida você deseja adicionar?');
        categoria = prompt('Em qual categoria você deseja inserir? (frutas, laticínios, congelados ou doces');

        if (categoria == 'frutas') {
            frutas.push(comida);
        }
        else if (categoria == 'laticínios') {
            laticinios.push(comida);
        }
        else if (categoria == 'congelados') {
            congelados.push(comida);
        }
        else if (categoria == 'doces') {
            doces.push(comida);
        }
        else {
            alert('Categoria inválida');
        }

        addComida = prompt('Deseja adicionar ou remover itens na sua lista? Responda com "adicionar", "remover" ou "não" se não quiser modificar a lista.');
    }


    while (addComida == 'remover') {
        alert(`Lista de compras:\n
        Frutas: ${frutas}\n
        Laticínios: ${laticinios}\n
        Congelados: ${congelados}\n
        Doces: ${doces}`);

        categoria = prompt('Em qual categoria você deseja remover? (frutas, laticínios, congelados ou doces');
        comida = prompt('Qual comida você deseja remover?');

        if (categoria == 'frutas' && frutas.includes(comida)) {
            remover = frutas.indexOf(comida);
            frutas.splice(remover, 1);
            alert(`item ${comida} removido!`)
        }
        else if (categoria == 'laticínios' && laticinios.includes(comida)) {
            remover = laticinios.indexOf(comida);
            laticinios.splice(remover, 1);
            alert(`item ${comida} removido!`)
        }
        else if (categoria == 'congelados' && congelados.includes(comida)) {
            remover = congelados.indexOf(comida);
            congelados.splice(remover, 1);
            alert(`item ${comida} removido!`)
        }
        else if (categoria == 'doces' && doces.includes(comida)) {
            remover = doces.indexOf(comida);
            doces.splice(remover, 1);
            alert(`item ${comida} removido!`)
        }
        else {
            alert('Categoria inválida ou item não existe');
        }

        addComida = prompt('Deseja adicionar ou remover itens na sua lista? Responda com "adicionar", "remover" ou "não" se não quiser modificar a lista.');
    }

    if (addComida == 'não') {
        break;
    }
    

}

alert(`Lista de compras:\n
Frutas: ${frutas}\n
Laticínios: ${laticinios}\n
Congelados: ${congelados}\n
Doces: ${doces}`);
