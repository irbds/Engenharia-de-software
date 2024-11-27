function mostrarDoacoes() {
    let doacoes = getDoacoes()

    
}





function getDoacoes() {
    let doacoes = [];
    for (const chave in localStorage) {
        const objeto = JSON.parse(localStorage.getItem(chave))
        if (objeto && objeto.hasOwnProperty('nome_doacao')) {
            doacoes.push(objeto);
        }

        return doacoes
        }
    }