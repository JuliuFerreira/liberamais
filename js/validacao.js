function enviarForm() 

{
    event.preventDefault();
    let form = document.contato; /* Aqui criei uma variavel chamada form para nao precisar repetir a palavra 'document.contato', sendo que
                                    document refere-se ao documento do HTML e contato refere-se ao nome do formulario la no Index*/

    if(form.nome.value == "") //Nessa linha eu pego a variavel form e acesso o id 'nome', na sequencia acessando o value, entao verifico se esta vazio o campo
    {
        alert("O campo nome é obrigatório."); //Aqui eu chamo a acao do Alert do javascript para apresentar mensagem de erro
        form.nome.focus(); //nessa linha eu retorno o foco para o campo
        return false; // aqui não deixo prosseguir
    }

    if(form.cpf.value == "")
    {
        alert("Por favor, informe seu CPF.");
        form.cpf.focus();
        return false;
    }

    if(form.fone.value == "")
    {
        alert ("Por favor, informe seu telefone para contato.");
        form.fone.focus();
        return false;
    }

    if(form.email.value == "")
    {
        alert ("Por favor, informe seu email.");
        form.email.focus();
        return false;
    }

    if(form.texto.value == "")
    {
        alert ("Escreva no campo sua solicitação...");
        form.texto.focus();
        return false;
    }
    
}
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9]/;
    var regex = /^[0-9]/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault(); //Insere ape 
       alert ("Por favor, insira apenas números")
    }
 }
