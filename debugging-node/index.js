const ordenaBurbuja = (lista) => {

    let longitudLista, IndexOrder, IndexChange, auxChange;
    longitudLista = lista.length;

    console.info(longitudLista);

    for (IndexOrder = 1; IndexOrder < longitudLista; IndexOrder++) {

        for (IndexChange = 0; IndexChange < (longitudLista - IndexOrder); IndexChange++) {

            if (lista[IndexChange] > lista[IndexChange + 1]) {
                auxChange = lista[IndexChange];
                lista[IndexChange] = lista[IndexChange + 1];
                lista[IndexChange + 1] = auxChange;
            }
        }
    }

    return lista;
}

let listaDesordenada =  [6, 5, 3, 1, 8, 7, 2, 4];
console.warn(listaDesordenada);

const listaOrdenada = ordenaBurbuja(listaDesordenada);
console.log(listaOrdenada);

            

