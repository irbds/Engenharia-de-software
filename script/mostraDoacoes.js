function mostrarDoacoes() {
    let doacoes = getDoacoes()

    const container = document.getElementById('doacoes-container')
    container.innerHTML = ''

    doacoes.forEach((doacao) => {
        const card = `
        <div class="card-doacao">
            <h4>${doacao.nome_doacao}</h4>
            <p>${doacao.Descricao}</p>
            <p><span>Doado: ${doacao.valor_doado}</span>/<span>${doacao.valor}</span></p>
            <p><span>Até: ${doacao.data_final}</span></p>
            <button value="Doar" class="Doar" id="doar"></button>
        </div>`
        
        container.innerHTML += card
    })
    
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