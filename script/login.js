const email = document.getElementById('idemail')
const senha = document.getElementById('idsenha')


function login() {
    if (camposEstaoVazios()) {
        return
    }

    const usuarioDigitado = {
        email: email.value,
        senha: senha.value        
    }

    const usuarioValidado = validarLogin(usuarioDigitado)
    
    if (usuarioValidado == null) {
        alert('Email e/ou senha invalidos')
    } else {
        fazerLogin(usuarioValidado)
    }
}

function camposEstaoVazios() {
    if(email.value == '' || senha.value == '') {
        alert('Preencha os campos')
        return true
    }

    return false
}


function validarLogin(usuario) {
    let usuarioValidado = null

    for (const chave in localStorage) {
        const objeto = JSON.parse(localStorage.getItem(chave))

        if (objeto && objeto.hasOwnProperty('CPF')) { // Se o objeto existe e tem a propriedade CPF significa que é um usuario então posso fazer as validações
            if (objeto.email == usuario.email && objeto.senha == usuario.senha) {
                usuarioValidado = objeto
            }
        }
    }

    return usuarioValidado

    
}


function fazerLogin(usuario) {
    const usuarioLogado = {
        estaLogado: true,
        id: usuario.id
    }

    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
}