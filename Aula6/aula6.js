const txtResultado = document.getElementById('resultadoA');
const titulo = document.getElementById('titulo');
const btnA = document.getElementById('calcularA');
const btnB = document.getElementById('calcularB');
const btnC = document.getElementById('calcularC');
const btnD = document.getElementById('calcularD');
const btnE = document.getElementById('calcularE');
const btnF = document.getElementById('calcularF');
const btnG = document.getElementById('calcularG');

const btnR = document.getElementById('calcularR');

function limparResultado(){
   txtResultado.value = "";
};

function fatorial (num){
   let f = 1;
   for (let cont=1;cont<=num;cont++){
      f *= cont;
   }
   return f;
}

function exerA (){

   limparResultado();
   titulo.innerHTML = "Resultado - A - " ;
   const max = 4;
   const nomes = [];

   //Entrada
   for (let i=0;i<=max;i++){
      nomes[i] = prompt ("Digite seu nome!");
   };

   //Saída 
   txtResultado.value += `Ìndice \t Nomes\n`
   for (let i=0;i<=max;i++){
      txtResultado.value += `${i} \t ${nomes[i]}\n`;
   };

};

function exerB (){
   limparResultado();
   titulo.innerHTML = "Resultado B";
   const A = [];
   const B = [];

   //Entrada de dados
   for(let cont=0;cont<=7;cont++){
      A[cont] = parseInt(prompt("Digite um número."));
   };

   //Processamento
   for(let cont=0;cont<=7;cont++){
      B[cont] = A[cont] * 3;
   };

   //Saída de dados
   txtResultado.value += `-A-\t-B-\n`
   for(let cont=0;cont<=7;cont++){
      txtResultado.value += `${A[cont]}\t${B[cont]}\n`
   };
};

function exerC () {
   limparResultado();
   titulo.innerHTML = 'Resultado - C -';
   const A = [];
   const B = [];
   const C = [];
   const max = 4;

   //Populando os arrays A e B
   for (let cont=0;cont<=max;cont++){
      A[cont] = parseInt(prompt("Digite um número para a Array A."));
   };
   for (let cont=0;cont<=max;cont++){
      B[cont] = parseInt(prompt("Digite um número para a Array B."));
   };

   //Criando a array C que é o resultado da diferença do array A com B.
   for (let cont=0;cont<=max;cont++){
      C[cont] = A[cont] - B[cont];
   };

   //Mostrar a array A, B e C na textArea
   for (let cont=0;cont<=max;cont++){
      txtResultado.value += `${A[cont]} - ${B[cont]} = ${C[cont]}\n`;
   };

};

function exerD() {
   alert ("Exercício D!")
};

function exerE(){
   limparResultado();
   titulo.innerHTML = "Resultado - E";
   const A = [];
   const B = [];
   
   for (let i=0;i<=14;i++){
      A[i] = parseInt(prompt("Digite um número para array A."))
   };

   for (let i=0;i<14;i++){
      B[i] = fatorial (A[i]);
   };

   txtResultado.value += `-A-\t-B-\n`;
   for (let i=0;i<14;i++){
      txtResultado.value += `${A[i]}\t${B[i]}\n`;
   };

};

function exerF(){
   alert ("Exercício F!");
};

function exerG(){
   limparResultado();
   titulo.innerHTML = `Resultado - G`;

   const A = [];
   const B = [];
   const C = [];

   //somente para uso do desenvolvedor
   const maxA = 3; // 0 - 3 --> 4
   const maxB = 5; // 0 - 5 --> 6
   const maxC = 9; // 0 - 9 --> 10

   for (let i=0;i<=maxA;i++){
      A[i] = prompt('Digite um nome para o array A.');
   };
   for (let i=0;i<=maxB;i++){
      B[i] = prompt('Digite um nome para o array B.');
   };

   for (let i=0;i<=maxC;i++){
      if (i <=3){
         C[i] = A[i]; // 0 1 2 3
      }else{
         C[i] = B[i-4]; // 0 1 2 3 4 5
      }
   };
   txtResultado.value += `-A-\t-B-\t-C-\n`;
   for (let i=0; i<=maxC;i++){
      if (i <=3){
         txtResultado.value += `${A[i]}\t${B[i]}\t${C[i]}\n`;
      }else if (i <= 5){
         txtResultado.value += `\t${B[i]}\t${C[i]}\n`;
      }else{
         txtResultado.value += `\t\t${C[i]}\n`;
      }

   };


};

function exerR (){
   limparResultado();
   titulo.innerHTML = `Resultado - G`;

   const A = [];
   const B = [];
   const C = [];
   const D = [];

   //somente para uso do desenvolvedor
   const max = 3;
   
   for (let i=0;i<=max;i++){
      A[i] = prompt('Digite um nome para o array A.');
   };
   for (let i=0;i<=max;i++){
      B[i] = prompt('Digite um nome para o array B.');
   };

   let contC = 0;
   let contD = 0;
   for (let i=0;i<=max;i++){
      const resto = i % 2;

      if (resto == 1){
         C[contC] = A[i];
         contC++;
      }else{
         D[contD] = A[i];
         contD++;         
      };
      
   };

   contC = 2;
   contD = 2;
   for (let i=0;i<=max;i++){
      const resto = i % 2;

      if (resto == 1){
         C[contC] = B[i];
         contC++;
      }else{
         D[contD] = B[i];
         contD++;         
      };
      
   };

   txtResultado.value = `-A-\t-B-\t-C-\t-D-\n`;
   for (let i=0; i<=max;i++){
      txtResultado.value += `${A[i]}\t${B[i]}\t${C[i]}\t${D[i]}\n`;
   }
}
//Eventos
btnA.addEventListener('click',exerA);
btnB.addEventListener('click',exerB);
btnC.addEventListener('click',exerC);
btnD.addEventListener('click',exerD);
btnE.addEventListener('click',exerE);
btnF.addEventListener('click',exerF);
btnG.addEventListener('click',exerG);
btnR.addEventListener('click',exerR);