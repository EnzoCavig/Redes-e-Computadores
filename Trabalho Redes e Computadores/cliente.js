
var sNomeDivCliente  = 'cliente',
    sNomeDivServidor = 'servidor';

function onClickBotaoCliente() {
    document.getElementById(sNomeDivCliente).innerHTML = '';
    document.getElementById(sNomeDivServidor).innerHTML = '';
    setTimeout(chamaRequisicaoServidor, 2000);
    setTimeout(aguardandoResposta, 0);
    
    if(document.getElementById('lista_servidor').value === 'ativado'){
        setTimeout(respostaRequisicaoServidorOk, 6100);
    } else {
        setTimeout(respostaRequisicaoServidorFail, 6100);
    }
    
};

function aguardandoResposta(){
    let iTempo = 0;
    for (var j = 0; j < 5; j++) {
        let sPonto = '.';
        for (var i = 0; i < 3; i++) {
            setTimeout(aguardandoRespostaServidor, iTempo, sPonto);
            iTempo += 400;
            sPonto += '.';
        }
    }
}

function chamaRequisicaoServidor(){
    let oDivCliente = document.getElementById(sNomeDivServidor);
    oDivCliente.innerHTML = getRequisaoServidor();    
}

function aguardandoRespostaServidor($sPonto){
    let oDivCliente = document.getElementById(sNomeDivCliente);
    oDivCliente.innerHTML = "Aguardando resposta do Servidor " + $sPonto;
}

function respostaRequisicaoServidorOk() {
    let oDivCliente = document.getElementById(sNomeDivCliente);
    oDivCliente.innerHTML = getRespostaServidorOk();
}

function respostaRequisicaoServidorFail() {
    let oDivCliente = document.getElementById(sNomeDivCliente);
    oDivCliente.innerHTML = getRespostaServidorFail();
}

function getRequisaoServidor(){
    let sLink = document.getElementById('lista_sites').value;
    return 'Get /'+ sLink + '<br>'
          + 'Accept-Language:  pt-br<br>'
          + 'Accept:<br>'  
          + 'Connection: close<br>'
          + 'Host: 192.168.1.100<br>';
};

function getRespostaServidorOk() {
    let sLink = document.getElementById('lista_sites').value;
    return sLink + ' 200 OK <br>'
         + 'Connection: close <br>'
         + 'Content-Length: 357 <br>'
         + 'Content-Type: text/html <br>'
         + 'Server: PT-Server/5.2 <br>'
         + "HTTP DATA..' <br>";
}

function getRespostaServidorFail() {
    let date = new Date();
    let sLink = document.getElementById('lista_sites').value;
    return sLink + ' 502 BAD GATEWAY <br>'
         + 'date: ' + date + ' <br>'
         + 'content-type: text/html; charset=UTF-8 <br>'
         + 'transfer-encoding: chunked <br>'
         + 'connection: close <br>'
         + 'server:  PT-Server/5.2<br>'
         + 'content-encoding: gzip <br>'
}
