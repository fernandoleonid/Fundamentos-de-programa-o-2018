const txtResultado = document.getElementById('resultadoA');
const btnCalcularA = document.getElementById('calcularA');
const btnCalcularB = document.getElementById('calcularB');
const btnCalcularE = document.getElementById('calcularE');
const btnCalcularF = document.getElementById('calcularF');
const btnCalcularJ = document.getElementById('calcularJ');
const btnCalcularO = document.getElementById('calcularO');
const btnCalcularQ = document.getElementById('calcularQ');

function limparResultado (){
   txtResultado.value = "";
};

function fatorial (num){
   let f = 1;
   for (let cont=1;cont<=num;cont++){
      f = f * cont;
   };
   return f;

};

function exerA(){
// Encontra o quadrado dos números inteiros existentes en 15 e 200.
   let cont = 15;
   let q = 0;
   limparResultado();
   while (cont <= 200){
      q = cont * cont;
      txtResultado.value += cont + " - " + q + "\n"; 
      cont ++;
   }
}

function exerB (){
// Cria uma tabuada
   let num = parseInt(prompt('Digite um número para criar a tabuada.'));
   let result = 0;
   limparResultado();
   for (let cont=1; cont <= 10; cont++ ){
      result = cont * num;
      txtResultado.value += cont + " X " + num + " = " + result + "\n";
   }
}
function exerE (){
// Apresenta os números ímpares entre 1 e 20   
   limparResultado();
   for (let cont=1; cont <=20; cont++){
      let resto = cont % 2;
      if (resto == 1){
         txtResultado.value += cont + '\n';
      };
   };
};

function exerF (){
   limparResultado();
   for (let cont=1; cont<200; cont++){;
      // 8 % 4 --> 0 resto da divisão
      // 8 / 4 --> 2 resultado (quociente)
      let resto = cont % 4;
      if (resto == 0){
         txtResultado.value += cont + '\n';
      };
   };
};

function exerJ (){
   limparResultado();
   for (let celsius=10; celsius<=100; celsius+=10){
      let f = celsius * 9 / 5 + 32;
      //txtResultado.value += celsius + " --> " + f + "\n";
      txtResultado.value += `${celsius} --> ${f} \n`;
   };
};

function exerO (){
   limparResultado();
   for (let cont=1;cont<=10;cont++){
      resto = cont % 2;
      if (resto ==1){
         let fat = fatorial(cont);
         txtResultado.value += `${cont} --> ${fat} \n`;
      };
   };
};

function exerQ (){
   limparResultado();
   let resp = true;
   let areaTotal = 0;
   while (resp){
      const comodo = prompt("Digite o nome do cômodo.");
      const largura = parseFloat(prompt("Digite a largura do cômodo."));
      const comprimento = parseFloat(prompt("Digite o comprimento do cômodo."));
      const area = largura * comprimento;
      areaTotal += area; 
      
      txtResultado.value += `${comodo} - ${largura} X ${comprimento} --> ${area.toFixed(2)}\n`;

      resp = confirm("Deseja incluir um novo cômodo?");
   };
   txtResultado.value += `Total --> ${areaTotal.toFixed(2)}`
};



//Eventos
btnCalcularA.addEventListener('click',exerA);
btnCalcularB.addEventListener('click',exerB);
btnCalcularE.addEventListener('click',exerE);
btnCalcularF.addEventListener('click',exerF);
btnCalcularJ.addEventListener('click',exerJ);
btnCalcularO.addEventListener('click',exerO);
btnCalcularQ.addEventListener('click',exerQ);









