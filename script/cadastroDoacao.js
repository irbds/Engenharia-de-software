const nomeDoacao = document.getElementById('nomeDoacao')
const descricao = document.getElementById('descricao')
const valorDoacao = document.getElementById('doacao')
const dataFinal = document.getElementById('dataFinal')

function cadastrarDoacao() {
    let idUsuario = estaLogado()
    if (idUsuario == 0) {
        alert('Faça login para acessar esse serviço')
        return
    }

    if (camposEstaoVazios()) {
        alert('Preencha os campos')
        return
    }

    let dataCriacao = getDate()
    const doacao = {
        id: localStorage.length,
        nome_doacao: nomeDoacao.value,
        valor: valorDoacao.value,
        descricao: descricao.value,
        data_criacao: dataCriacao,
        data_final: dataFinal.value,
        valor_doado: 0
    }

    salvarDoacao(doacao, idUsuario)
}

function getDate() {
    let dataAtual = new Date()
    let dia = dataAtual.getDay()
    let mes = dataAtual.getMonth()
    let ano = dataAtual.getFullYear()

    let data = `${dia}/${mes}/${ano}`

    return data
}


function camposEstaoVazios() {
    if (nomeDoacao.value == '' || valorDoacao.value == '' || descricao.value == '' || dataFinal.value) {
        return true
    }

    return false
}


// Verifica se o usuario esta logado, retorna o id do usuario logado ou 0 se não estiver logado 
function estaLogado() {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'))

    if (usuario == null || usuario.estaLogado == false) {
        return 0
    }


    return usuario.id
}

// Salva no localStorage a doação e adiciona no array de doacoes criadas pelo usuario
function salvarDoacao(doacao, idUsuario) {
    localStorage.setItem(localStorage.length, JSON.stringify(doacao))

    for(key in localStorage) {
        let objeto = JSON.parse(localStorage.getItem(key))

        if (objeto && objeto.hasOwnProperty('cpf_cnpj')) { // Verifica se o objeto é um usuario
            if (objeto.id == idUsuario) {// Localiza o usuario logado
                let codigoDasDoacoes = objeto.codigoDasDoacoes
                codigoDasDoacoes.push(doacao.id) // Adiciona o id da doação no array

                localStorage.setItem(key, JSON.stringify(objeto)) // Salva o usuario novamente com a mesma key
            }
        }
    }
}