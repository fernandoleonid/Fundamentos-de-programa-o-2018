const btnResolver1 = document.getElementById('resolver1')
const btnResolver2 = document.getElementById('resolver2')
const btnResolver3 = document.getElementById('resolver3')
const btnResolver4 = document.getElementById('resolver4')

btnResolver1.addEventListener('click',solucao1)
btnResolver2.addEventListener('click',solucao2)
btnResolver3.addEventListener('click',solucao3)
btnResolver4.addEventListener('click',solucao4)


function solucao1 (){
   const txtNumero = parseInt(document.getElementById('numero1').value)

   if (ePar(txtNumero) ){
      mostrarSolucao('solucao1','Verdadeiro');
   }else{
      mostrarSolucao('solucao1','falso');
   }
}

function solucao2 (){
   const txtNumero = parseInt(document.getElementById('numero2').value)

   if (ePar(txtNumero) ){
      mostrarSolucao('solucao2','Par');
   }else{
      mostrarSolucao('solucao2','Ímpar');
   }
}

function solucao3 (){

   const txtNumero = parseInt(document.getElementById('numero3').value);
   mostrarSolucao('solucao3',ePositivo(txtNumero));
   
}

function solucao4 (){

   const txtNumero1 = parseInt(document.getElementById('numero4').value);
   const txtNumero2 = parseInt(document.getElementById('numero5').value);
   const txtNumero3 = parseInt(document.getElementById('numero6').value);
   
   mostrarSolucao('solucao4', maior3(txtNumero1,txtNumero2,txtNumero3));
   
}

function ePar(num){
   //Função recebe um número inteiro e retorna verdadeira caso for par
   const resto = num % 2;

   return resto == 0
   
}

function mostrarSolucao (id, valor){

   document.getElementById (id).value = valor;
   
}

function ePositivo(num){
   if (num > 0){
      return 'Positivo';
   }else if(num == 0){
      return 'Neutro';
   }else{
      return 'Negativo'
   }
}

function maior3 (a,b,c){
   let maior = a;
   if (maior < b){
      maior = b;
   }
   if (maior < c){
      maior = c;
   }
   return maior;
}