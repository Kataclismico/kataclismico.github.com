/*Vídeo 3*/
console.log("Hola mundo desde JavaScript");


/*Vídeo 4*/
/*Seleccionar Elemento*/
//DOM
let container=document.querySelector(".container");
console.log(container);

let tabla=document.querySelector(".table");
console.log(tabla);

/*Vídeo 5*/
/*Listas de elementos y sus recorridos*/
/*let link=document.querySelectorAll("a");*/
/*console.log(link);*/
//NodoList

/*let links=document.querySelectorAll("a");*/
/*links.forEach(function(link){*/
    /*console.log(link);});*/

/*Vídeo 7*/
//Obtener los elementos de la clase .close
/*let links=document.querySelectorAll(".close");
//Recorrerlos
/*links.forEach(function(link){*/
    //Agregar un eventp click a cada uno de ellos -case sensitive
/*      link.addEventListener("click", function(ev){*/
/*          ev.preventDefault();*/
/*          return false;});});*/

let links=document.querySelectorAll(".close");
links.forEach(function(enlace){
    enlace.addEventListener("click",function(evento){
        evento.preventDefault();
        let content=document.querySelector('.content');
        //Quitarle las clases de animación que ya tienen
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");
        //Vídeo 9Timers
        setTimeout(function(){
            location.href="/boletines";
        },2000);                  //Milisegunos
        //setInterval(function(){
            //Location.href="/";
        //},1000);
        
        return false;
    });
});



