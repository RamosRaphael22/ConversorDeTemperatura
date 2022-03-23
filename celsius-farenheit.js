  var listahistoricoGraus = [];
  
  function CelsiusParaFarenheit(graus) {
    var farenheit = "";
	var celsius;
	
    if (graus == "") {
      document.getElementById("exibirRespostaNoHTML").innerHTML = "POR FAVOR INSIRA UM NUMERO";
    } else {
      	celsius = parseFloat(graus);
   	  	farenheit = (((celsius / 5) * 9) + 32).toFixed(2);
      	document.getElementById("exibirRespostaNoHTML").innerHTML = farenheit + "°";
		listahistoricoGraus.push({convertidoDe: "C", valorInicial: celsius, valorFinal: farenheit, convertidoPara: "F"});
    }
  }
  
  function FarenheitParaCelsius(graus) {
    var celsius = "";
	var farenheit;

    if (graus == "") {
      document.getElementById("exibirRespostaNoHTML").innerHTML = "POR FAVOR INSIRA UM NUMERO";
    } else {
      	farenheit = parseFloat(graus);
   	  	celsius = ((farenheit - 32) * 5/9).toFixed(2);
      	document.getElementById("exibirRespostaNoHTML").innerHTML = celsius + "°";
		listahistoricoGraus.push({convertidoDe: "F", valorInicial: farenheit, valorFinal: celsius, convertidoPara: "C"});
    }
  }
  
  function KelvinParaCelsius(graus) {
    var celsius = "";
	var kelvin;

    if (graus == "") {
      document.getElementById("exibirRespostaNoHTML").innerHTML = "POR FAVOR INSIRA UM NUMERO";
    } else {
      	kelvin = parseFloat(graus);
   	  	celsius = (kelvin - 273.15).toFixed(2);
      	document.getElementById("exibirRespostaNoHTML").innerHTML = celsius + "°";
		listahistoricoGraus.push({convertidoDe: "K", valorInicial: kelvin, valorFinal: celsius, convertidoPara: "C"});
    }
  }
   
  function KelvinParaFarenheit(graus) {
    var farenheit = "";
	var kelvin;
	
    if (graus == "") {
      document.getElementById("exibirRespostaNoHTML").innerHTML = "POR FAVOR INSIRA UM NUMERO";
    } else {
      	kelvin = parseFloat(graus);
   	  	farenheit = (1.8 * (kelvin - 273.15) + 32).toFixed(2);
      	document.getElementById("exibirRespostaNoHTML").innerHTML = farenheit + "°";
		listahistoricoGraus.push({convertidoDe: "K", valorInicial: kelvin, valorFinal: farenheit, convertidoPara: "F"});
    }
  }
  
  function FarenheitParaKelvin(graus) {
    var kelvin = "";
	var farenheit;

    if (graus == "") {
      document.getElementById("exibirRespostaNoHTML").innerHTML = "POR FAVOR INSIRA UM NUMERO";
    } else {
      	farenheit = parseFloat(graus);
   	  	kelvin = ((farenheit - 32) * 5/9 + 273.15).toFixed(2);
      	document.getElementById("exibirRespostaNoHTML").innerHTML = kelvin + "°";
		listahistoricoGraus.push({convertidoDe: "F", valorInicial: farenheit, valorFinal: kelvin, convertidoPara: "K"});
    }
  }
  
  function CelsiusParaKelvin(graus) {
    var kelvin = "";
	var celsius;
	
    if (graus == "") {
      document.getElementById("exibirRespostaNoHTML").innerHTML = "POR FAVOR INSIRA UM NUMERO";
    } else {
      	celsius = parseFloat(graus);
   	  	kelvin = (celsius + 273.15).toFixed(2);
      	document.getElementById("exibirRespostaNoHTML").innerHTML = kelvin;
		listahistoricoGraus.push({convertidoDe: "C", valorInicial: celsius, valorFinal: kelvin, convertidoPara: "K"});
    }
  }
 
  function escolherconversao() {
     var entrada = document.getElementById("entrada")[document.getElementById("entrada").selectedIndex].value;
     var saida = document.getElementById("saida")[document.getElementById("saida").selectedIndex].value;
     var valorEntrada = document.getElementById("grausInseridos").value;
	 
	 if (entrada == saida) {
		 document.getElementById("exibirRespostaNoHTML").innerHTML = "insira uma entrada diferente da sáida"
     } else if (entrada == "celsius" && saida == "farenheit") {
        CelsiusParaFarenheit(valorEntrada);} 

     else if(entrada == "farenheit" && saida == "celsius") {
         FarenheitParaCelsius(valorEntrada);}
	 
	 else if(entrada == "kelvin" && saida == "celsius"){
		 KelvinParaCelsius(valorEntrada);}
	 
	 else if(entrada == "kelvin" && saida == "farenheit"){
		 KelvinParaFarenheit(valorEntrada);}
	 
	 else if(entrada == "farenheit" && saida == "kelvin"){
		FarenheitParaKelvin(valorEntrada);}
	 
	 else if(entrada == "celsius" && saida == "kelvin"){
		 CelsiusParaKelvin(valorEntrada);}
}
 
  function Historico() { 
	var calculoposicao;
	var seletorHistorico = document.getElementById("exibirHistoricoNoHTML");
	seletorHistorico.innerHTML = "";
    
	if (listahistoricoGraus.length > 0) { 
		for (var indice = 0; indice < 3 ; indice++) {
			calculoposicao = listahistoricoGraus.length - indice -1;
			seletorHistorico.innerHTML = seletorHistorico.innerHTML
			+ "<p>Conversão " + parseInt(listahistoricoGraus.length - indice) + ": "
			+ listahistoricoGraus[calculoposicao].valorInicial 
			+ (listahistoricoGraus[calculoposicao].convertidoDe == "K" ? "" : "°")	
			+ listahistoricoGraus[calculoposicao].convertidoDe + " -> "
			+ listahistoricoGraus[calculoposicao].valorFinal  
			+ (listahistoricoGraus[calculoposicao].convertidoPara == "K" ? "" : "°")  
			+ listahistoricoGraus[calculoposicao].convertidoPara + "</p>";
		}
    }
	else {seletorHistorico.innerHTML = "Seu Histórico Está Vazio";} 
  }