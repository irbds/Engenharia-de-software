const email = document.getElementById('idemail')
const senha = document.getElementById('idsenha')


function login() {
    if (camposEstaoVazios()) {
        return
    }
}

function camposEstaoVazios() {
    if(email.value == '' || senha.value == '') {
        alert('Preencha os campos')
        return true
    }

    return false
}