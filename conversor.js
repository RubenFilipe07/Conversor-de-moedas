   var resultado;
    
    $.ajax({
      type: "GET",
      dataType: "JSON",
      url: "https://economia.awesomeapi.com.br/json/all",
      success: function(data){
        console.log("Cotação atualizada com sucesso :)")
        console.log(data);
        resultado = data     
      },  
        error: function(data){  
        console.log("Error :/")
        alert('Erro! o site não consegiu carregar os valores atuais da cotação. Tente novamente mais tarde. :('); }
    });
    
    function converter(){
     
    var dolar =(resultado["USD"]["bid"]);
    var euro =(resultado["EUR"]["bid"]);
    var btcoin =(resultado["BTC"]["bid"]);
    var peso =(resultado["ARS"]["bid"])
    var ltcoin =(resultado["LTC"]["bid"])
    var libra =(resultado["GBP"]["bid"])
    var canadense =(resultado["CAD"]["bid"])
    var australiano =(resultado["AUD"]["bid"])
    var iene =(resultado["JPY"]["bid"])
    var franco =(resultado["CHF"]["bid"])
    var ethereum =(resultado["ETH"]["bid"])

    dolar = dolar.replace(',','.')
    dolar = parseFloat(dolar).toFixed(2);
    
    euro = euro.replace(',','.')
    euro = parseFloat(euro).toFixed(2);
    
    peso = peso.replace(',','.')
    peso = parseFloat(peso).toFixed(2);

    ltcoin = ltcoin.replace(',','.')
    ltcoin = parseFloat(ltcoin).toFixed(2);

    libra = libra.replace(',','.')
    libra = parseFloat(libra).toFixed(2);

    btcoin = btcoin.replace(',','.')
    btcoin = parseFloat(btcoin);

    canadense = canadense.replace(',','.')
    canadense = parseFloat(canadense).toFixed(2);
    
    australiano = australiano.replace(',','.')
    australiano = parseFloat(australiano).toFixed(2);

    iene = iene.replace(',','.')
    iene = parseFloat(iene).toFixed(2);

    franco = franco.replace(',','.')
    franco = parseFloat(franco).toFixed(2);

    ethereum = ethereum.replace(',','.')
    ethereum = parseFloat(ethereum).toFixed(2);

    var data = (resultado["XRP"]["create_date"])
    //Mudando a formatação da data para DD/MM/AA 
    var dia = data.substring(8,10)
    var mes = data.substring(5,7)
    var ano = data.substring(0,4)
    var hora = data.substring(11, 16)
    var newdata= `${dia}/${mes}/${ano} às ${hora}`
    var att = document.getElementById("atualizacao");
     
    var num = document.getElementById("entrada").value;
    num = num.replace(',','.')
    num = parseFloat(num);
   
    var calculo;
 
    var saida = document.getElementById("saida");
    var selecionado = document.getElementById("moedas");
    var item = selecionado.options[selecionado.selectedIndex].value;
   
    if (isNaN(num)==true){
      alert("Digite um valor!")
    }
    
    else if(num >0 && item != 0){
      att.innerHTML = ' Cotação atualizada em '+newdata;
      }
   
   if(item == 0){
      alert("Escolha uma moeda!")
    }

    else if (num <=0){
      alert("Valor inválido! Digite somente valores positivos e diferentes de zero")
    }

    else if (item == 1 && isNaN(num)==false){
    calculo = num * dolar
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'USD'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}` 
    }

    else if (item == 2 && isNaN(num)==false){
    calculo = num * euro
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'EUR'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    }

    else if (item == 3 && isNaN(num)==false){
    calculo = num * peso
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'ARS'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}` 
    }

    else if (item == 4 && isNaN(num)==false){
    calculo = num * ltcoin
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'LTC'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}` 
    }

    else if (item == 5 && isNaN(num)==false){
    btcoin = btcoin
    calculo = num * btcoin
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'BTC'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    }

    else if (item == 6 && isNaN(num)==false){
    calculo = num * ethereum
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'ETH'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}` 
    }

    else if (item == 7 && isNaN(num)==false){
    calculo = num * libra
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'GBP'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}` 
    }

    else if (item == 8 && isNaN(num)==false){
    calculo = num * canadense
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'CAD'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}` 
    }

    else if (item == 9 && isNaN(num)==false){
    calculo = num * australiano
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'AUD'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}` 
    }

    else if (item == 10 && isNaN(num)==false){
    calculo = num * iene
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'JPY'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}` 
    }

    else if (item == 11 && isNaN(num)==false){
    calculo = num * franco
    num = num.toLocaleString('en-us',{style: 'currency', currency: 'CHF'});
    calculo = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}` 
    }  
}
