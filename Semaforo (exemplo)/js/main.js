const btnR = document.getElementById("vermelho");
const btnY = document.getElementById("amarelo");
const btnG = document.getElementById("verde");
const btnA = document.getElementById("automatico");

let auto = null;

btnR.addEventListener ('click',function (){
    document.getElementById("img").src = "./img/vermelho.png"
    clearInterval(auto);
});

btnY.addEventListener ('click',function (){
    document.getElementById("img").src = "./img/amarelo.png"
    clearInterval(auto);
});

btnG.addEventListener ('click',function (){
    document.getElementById("img").src = "./img/verde.png"
    clearInterval(auto);
});

function automatico () {
   let num = 0;
   
   function trocaImagem (){

      if (num == 0){
          document.getElementById("img").src = "./img/vermelho.png";
          num = 1;
      }else if (num == 1) {   
          document.getElementById("img").src = "./img/amarelo.png";
          num = 2;
      }else {
          document.getElementById("img").src = "./img/verde.png";
          num = 0;
      };

   };

   auto = setInterval (trocaImagem,1000, );
};


btnA.addEventListener ('click',automatico);


