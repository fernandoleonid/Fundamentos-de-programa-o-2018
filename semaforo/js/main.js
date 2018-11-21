const btnVermelho = document.getElementById("vermelho");
const btnAmarelo = document.getElementById("amarelo");
const btnVerde = document.getElementById("verde");
const btnAuto = document.getElementById("auto");
const img = document.getElementById("img");
let auto = null;

btnVermelho.addEventListener("click", function (){
   img.src = "./img/vermelho.png";
   clearInterval(auto);
});

btnAmarelo.addEventListener("click", function (){
   img.src = "./img/amarelo.png";
   clearInterval(auto);
});

btnVerde.addEventListener("click", function (){
   img.src = "./img/verde.png";
   clearInterval(auto);
});

btnAuto.addEventListener("click", function (){
   let cont = 0;

   const trocarImagem = function (){
      if (cont == 0 ){
         img.src = "./img/vermelho.png";
         cont = 1;
      }else if (cont == 1){   
         img.src = "./img/amarelo.png";
         cont = 2;
      }else {
         img.src = "./img/verde.png";
         cont = 0;
      };
   };

   auto = setInterval(trocarImagem,1000);

});

