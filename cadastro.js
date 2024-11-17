//Função para mostar o input para cpf
function mostrar_cpf(){
    document.getElementById('label_cp').style.display = 'block';
    document.getElementById('input_cp').setAttribute('placeholder', "CPF")
}

//Função para mostar o input para cnpj
function mostrar_cnpj(){
    document.getElementById('label_cp').style.display = 'block';
    document.getElementById('input_cp').setAttribute('placeholder', "CNPJ")
}


function cadastrar_dados(){
    //Recebe os dados do fromulário em html
    let nome = document.getElementById('nome').value
    let escolha = document.getElementById('input_cp').value
    let cpf = ""
    let cnpj = ""
    let email = document.getElementById('email').value
    
    if(nome =="" || escolha == "" || email == ""){
        alert('ERRO[dados faltando]')
    }else{
        //Armazena os dados utilizando o localStorage
        localStorage.setItem('nome', nome)
        localStorage.setItem('email', email)

        //Verifica qual foi o documento escolhido pelo usuário
        if(escolha.lenght > 11){
            cnpj = escolha
        } else{
            cpf = escolha
        }
        
        //Armazena o documento escolhido pelo usuário CPF ou CNPJ
        if(cpf != ""){
            localStorage.setItem('cpf', cpf)
        } else if(cnpj != ""){
            localStorage.setItem('cnpj', cnpj)
        }
    }
}