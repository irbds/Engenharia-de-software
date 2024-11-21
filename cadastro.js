function cadastrar_dados(){
    //Recebe os dados do fromulário em html
    let id_usuario = document.getElementById("id_usuario").value
    let nome = document.getElementById('nome').value
    let password = document.getElementById('senha_usuario')
    let cpf_cnpj = document.getElementById('cpf-cnpj').value
    let email = document.getElementById('email').value
    let nascimento_fundacao = document.getElementById('nascimento_fundacao')
    let codigo_doacao = []

    //Armazwna os dados em um JSON
    const usuario = {
        "id": id_usuario,
        "nome": nome,
        "password": password,
        "cpf_cnpj": cpf_cnpj,
        "email": email,
        "nascimento_fundacao": nascimento_fundacao,
        "codigo_doacao": codigo_doacao
    }
    
    if(id_usuario == "" || nome =="" || password== "" || cpf_cnpj == "" || email == "" || nascimento_fundacao == "" || codigo_doacao.length() < 1){
        //Exibe erro caso algum dado esteja faltando
        alert('ERRO[dados faltando]')
    }else{
        //Armazena o JSON no localStorage
        localStorage.setItem('dados_usuario', JSON.stringify(usuario))
        console.log('Cadasro bem sucedido')
    }
}