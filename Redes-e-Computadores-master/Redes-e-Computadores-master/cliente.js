
  
    
var sNomeDivCliente = 'cliente';

function onClickBotaoCliente() {
    debugger;
    setTimeout(chamaRequisicaoServidor, 2000);
    setTimeout(aguardandoRespostaServidor, 3000);
    debugger;
    if(document.getElementById('lista_servidor').value == 'ativado'){
        setTimeout(respostaRequisicaoServidorOk, 5000);
    } else {
        setTimeout(respostaRequisicaoServidorFail, 5000);
    }
    
};

function chamaRequisicaoServidor(){
    let oDivCliente = document.getElementById(sNomeDivCliente);
    oDivCliente.innerHTML = getRespostaServidorOk();    
}

function aguardandoRespostaServidor(){
    let oDivCliente = document.getElementById(sNomeDivCliente);
    oDivCliente.innerHTML = oDivCliente.innerHTML + "<br> Aguardando resposta do Servidor:<br>"
}

function respostaRequisicaoServidorOk() {
    let oDivCliente = document.getElementById(sNomeDivCliente);
    oDivCliente.innerHTML = oDivCliente.innerHTML + '<br>' + getRespostaServidor();
}

function respostaRequisicaoServidorFail() {
    let oDivCliente = document.getElementById(sNomeDivCliente);
    oDivCliente.innerHTML = oDivCliente.innerHTML + '<br>' + getRespostaServidorFail();
}

function getRequisaoServidor(){
    let sLink = document.getElementById('lista').value;
    return 'Get /'+ sLink + '<br>'
          + 'Accept-Language:  pt-br<br>'
          + 'Accept:<br>'  
          + 'Connection: close<br>'
          + 'Host: 192.168.1.100<br>';
};

function getRespostaServidorOk() {
    let sLink = document.getElementById('lista').value;
    return sLink + ' 200 OK <br>'
         + 'Connection: close <br>'
         + 'Content-Length: 357 <br>'
         + 'Content-Type: text/html <br>'
         + 'Server: PT-Server/5.2 <br>'
         + "HTTP DATA..' <br>";
}

function getRespostaServidorFail() {
    let date = new Date();
    let sLink = document.getElementById('lista').value;
    return sLink + ' 502 BAD GATEWAY <br>'
         + 'date: ' + date + ' <br>'
         + 'content-type: text/html; charset=UTF-8 <br>'
         + 'transfer-encoding: chunked <br>'
         + 'connection: close <br>'
         + 'server:  PT-Server/5.2<br>'
         + 'content-encoding: gzip <br>'
}
