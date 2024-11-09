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

//Formata o input date
function formatar_dara(){
    let data_input = document.getElementById('data')
    let data = data_input.value()

    if(data){
        const [year, month, day] = dateValue.split("-");
        data.value = `${day}/${month}/${year}`; 
    }
}
