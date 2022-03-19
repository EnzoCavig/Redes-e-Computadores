
    var sNomeDivCliente = 'servidor';

    function onClickBotaoCliente() {
        debugger;
        setTimeout(chamaRequisicaoServidor, 2000);
        setTimeout(aguardandoRespostaServidor, 3000);
        setTimeout(respostaRequisicaoServidor, 5000);
    };

    function chamaRequisicaoServidor(){
        let oDivCliente = document.getElementById(sNomeDivCliente);
        oDivCliente.innerHTML = getRequisaoServidor();    
    }

    function aguardandoRespostaServidor(){
        let oDivCliente = document.getElementById(sNomeDivCliente);
        oDivCliente.innerHTML = oDivCliente.innerHTML + "<br> Aguardando resposta do Servidor:<br>"
    }

    function respostaRequisicaoServidor() {
        let oDivCliente = document.getElementById(sNomeDivCliente);
        oDivCliente.innerHTML = oDivCliente.innerHTML + '<br>' + getRespostaServidor();
    }

    function getRequisaoServidor(){
        let sLink = document.getElementById('lista').value;
        return 'Get /'+ sLink + '<br>'
              + 'Accept-Language:  pt-br<br>'
              + 'Accept:<br>'  
              + 'Connection: close<br>'
              + 'Host: 192.168.1.100<br>';
    };

    function getRespostaServidor() {
        let sLink = document.getElementById('lista').value;
        return sLink + ' 200 OK <br>'
             + 'Connection: close <br>'
             + 'Content-Length: 357 <br>'
             + 'Content-Type: text/html <br>'
             + 'Server: PT-Server/5.2 <br>'
             + "HTTP DATA..' <br>";
    }