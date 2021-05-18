var resultado;

$.ajax({
  type: "GET",
  dataType: "JSON",
  url: "https://economia.awesomeapi.com.br/json/all",
  success: function (data) {
    resultado = data
  },
  error: function (data) {
    alert('Erro! o site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde. :(');
  }
});

function converter() {
  var euro = resultado["EUR"]["bid"]
  var dolar = resultado["USD"]["bid"]
  var dolarTurismo = resultado["USDT"]["bid"]
  var dolarCanadense = resultado["CAD"]["bid"]
  var dolarAustraliano = resultado["AUD"]["bid"]
  var libra = resultado["GBP"]["bid"]
  var peso = resultado["ARS"]["bid"]
  var iene = resultado["JPY"]["bid"]
  var yuan = resultado["CNY"]["bid"]
  var franco = resultado["CHF"]["bid"]
  var shekel = resultado["ILS"]["bid"]
  var btcoin = resultado["BTC"]["bid"]
  var ethereum = resultado["ETH"]["bid"]
  var ltcoin = resultado["LTC"]["bid"]
  var dogecoin = resultado["DOGE"]["bid"]
  var xrp = resultado["XRP"]["bid"]

  function getAtualizacao(moeda) {
    var data = (resultado[moeda]["create_date"])
    //Mudando a formatação da data para DD/MM/AA 
    var dia = data.substring(8, 10)
    var mes = data.substring(5, 7)
    var ano = data.substring(0, 4)
    var hora = data.substring(11, 16)
    var dataFormatada = `${dia}/${mes}/${ano} às ${hora}`
    var atualizacao = document.querySelector("#atualizacao");
    atualizacao.innerHTML = 'Cotação atualizada em ' + dataFormatada;
  }

  var num = document.querySelector("#entrada").value;
  num = parseFloat(num);

  var calculo;

  var saida = document.querySelector("#saida");
  var selecionado = document.querySelector("#moedas").value;

  if (isNaN(num) == true && selecionado == "NULL") {
    alert("Digite um valor e escolha uma moeda!")
  } else {
    if (isNaN(num) == true) {
      alert("Digite um valor!")
    }
    if (selecionado == "NULL") {
      alert("Escolha uma moeda!")
    }
  }

  if (num <= 0) {
    alert("Valor inválido! Digite somente valores positivos e diferentes de zero")
  }

  if (selecionado == "EUR" && isNaN(num) == false) {
    calculo = num * euro
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'EUR' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("EUR")
  }

  if (selecionado == "USD" && isNaN(num) == false) {
    calculo = num * dolar
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("USD")
  }

  if (selecionado == "USDT" && isNaN(num) == false) {
    calculo = num * dolarTurismo
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("USDT")
  }

  if (selecionado == "CAD" && isNaN(num) == false) {
    calculo = num * dolarCanadense
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'CAD' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("CAD")
  }

  if (selecionado == "AUD" && isNaN(num) == false) {
    calculo = num * dolarAustraliano
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'AUD' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("AUD")
  }

  if (selecionado == "GBP" && isNaN(num) == false) {
    calculo = num * libra
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'GBP' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("GBP")
  }

  if (selecionado == "ARS" && isNaN(num) == false) {
    calculo = num * peso
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'ARS' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("ARS")
  }

  if (selecionado == "JPY" && isNaN(num) == false) {
    calculo = num * iene
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'JPY' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("JPY")
  }

  if (selecionado == "CNY" && isNaN(num) == false) {
    calculo = num * yuan
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'CNY' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("CNY")
  }

  if (selecionado == "CHF" && isNaN(num) == false) {
    calculo = num * franco
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'CHF' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("CHF")
  }

  if (selecionado == "ILS" && isNaN(num) == false) {
    calculo = num * shekel
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'ILS' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("ILS")
  }

  if (selecionado == "BTC" && isNaN(num) == false) {
    btcoin = btcoin
    calculo = num * btcoin
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'BTC' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("BTC")
  }

  if (selecionado == "ETH" && isNaN(num) == false) {
    calculo = num * ethereum
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'ETH' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("ETH")
  }

  if (selecionado == "LTC" && isNaN(num) == false) {
    calculo = num * ltcoin
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'LTC' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("LTC")
  }

  if (selecionado == "DOGE" && isNaN(num) == false) {
    calculo = num * dogecoin
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'XDG' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("DOGE")
  }

  if (selecionado == "XRP" && isNaN(num) == false) {
    calculo = num * xrp
    num = num.toLocaleString('en-us', { style: 'currency', currency: 'XRP' });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Resultado: ${num} equivale a ${calculo}`
    getAtualizacao("XRP")
  }

}
