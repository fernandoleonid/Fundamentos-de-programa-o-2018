(()=> {
   const imagens = document.getElementById("images");
   let cont = 0;
   let max = 8;
   for (i=1;i<=max;i++){
      imagens.insertAdjacentHTML ("beforeend", `<img src="./img/fotos (${i}).jpg" class="fadeIn" id="img${i}"></img>`);
   }
   const buttons = document.getElementById("buttons");
   for (i=1;i<=max;i++){
      buttons.insertAdjacentHTML ("beforeend", `<span></span>`);
   }

   const btn = Array.from(document.querySelectorAll("span"));
   const img = document.querySelectorAll("img");
   const btnPrev = document.querySelector(".prev"); 
   const btnNext = document.querySelector(".next");
   img[0].style.display = "block";


   imgNext =() => {

      if (cont >= max-1){
         img[max-1].style.display = "none";
         img[0].style.display = "block";
         cont = 0;
      }else {
         img[cont].style.display = "none";
         img[cont+1].style.display = "block";
         cont ++;
      };
   }

   imgPrev =() => {
      if (cont <= 0){
         img[0].style.display = "none";
         img[max-1].style.display = "block";
         cont = max-1;
      }else {
         img[cont].style.display = "none";
         img[cont-1].style.display = "block";
         cont --;
      };
   }

   const loadImage = (i) => {
      img[cont].style.display = "none";
      img[i].style.display = "block";
      cont = i;
   }
   // btn.map((button,index) => loadImage (button,index));
   btn.map((button,index) => 
      button.addEventListener("click", () => loadImage(index)));
   btnNext.addEventListener("click",imgNext);
   btnPrev.addEventListener("click",imgPrev);
   
})();