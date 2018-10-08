var calcularA = document.getElementById("calcularA");

calcularA.addEventListener("click",exercicioA)

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