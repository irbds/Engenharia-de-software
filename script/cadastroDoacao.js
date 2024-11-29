const nomeDoacao = document.getElementById('nomeDoacao')
const descricao = document.getElementById('descricao')
const valorDoacao = document.getElementById('doacao')
const dataFinal = document.getElementById('dataFinal')

function cadastrarDoacao() {
    if (camposEstaoVazios()) {
        alert('Preencha os campos')
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

    localStorage.setItem(localStorage.length, JSON.stringify(doacao))
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