var calcularA = document.getElementById("calcularA");
var btnCalcularC = document.getElementById('calcularC');

calcularA.addEventListener("click",exercicioA);
btnCalcularC.addEventListener('click',exercicioC);

function exercicioA(){

	var n1 = parseInt(document.getElementById("numero1").value);
	var n2 = parseInt(document.getElementById("numero2").value);
	var resultado = document.getElementById("resultadoA");
	
	if ( n1 > n2 ) {
		resultado.value = n1 - n2;
		resultado.style.backgroundColor = "#00FF00";
	}else{
		resultado.value = n2 - n1;
		resultado.style.backgroundColor = "blue";
	}

}

function exercicioC(){
	
	//Declarando variáveis
	//Entrada
	var nota1 = parseInt(document.getElementById('nota1').value);
	var nota2 = parseInt(document.getElementById('nota2').value);
	var nota3 = parseInt(document.getElementById('nota3').value);
	var nota4 = parseInt(document.getElementById('nota4').value);
	var txtMedia = document.getElementById('media');
	var txtSituacao = document.getElementById('situacao');

	//processamento
	var media = (nota1 + nota2 + nota3 + nota4) / 4;

	if (media >= 6){
		var situacao = "Aprovado";
		var cor = "green"
	}else{
		var situacao = "Reprovado";
		var cor = "red"
	}

	//saída
	txtMedia.value = media;
	txtSituacao.value = situacao;
	txtSituacao.style.backgroundColor = cor;

}