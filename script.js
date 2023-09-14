    

    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const message = document.getElementById('message');

function login(){
    if (email.value == '' && number.value == '' && message.value == '') {
       alert("Preencha os campos: ")
    }
    else if(email.value == '' || number.value == '' || message.value == '') {
        alert("Preencha todos os campos: ")
     }
    else {
        alert("Dados enviados com sucesso , aguarde o retorno em até 48H!")
    }

}
