let ul = document.getElementById("contenedor-tarjetas");

//funcion para crear cada tarjeta 
const crearTarjetas = function(imagen, nombre){
    
    let li = document.createElement("li");
    li.classList.add("tarjeta");
    ul.append(li);

    let img = document.createElement("img");
    img.classList.add("imagenTarjeta")
    img.src = `imagenes/${imagen}`;
    li.append(img);

    let div = document.createElement("div");
    div.classList.add("info-tarjetas");
    li.append(div);

    let h3 =document.createElement("h3");
    h3.innerText = nombre;
    div.append(h3);

}

// FUNCION CON ARRAY PARA AGREGAR LAS TARJETAS EN EL CONTENEDOR "ul"

const imagenes = ["alegria.jpg", "verguenza.jpg","aburrimiento.jpeg","ansiedad.jpg","envidia.jpg","furia.jpeg"];
const nombres = ["Alegria","Verguenza","Aburrimiento","Ansiedad","Envidia","Furia"];
for (let indice = 0 ; indice < imagenes.length; indice ++){
    crearTarjetas(imagenes[indice],nombres[indice]);
}

/* crearTarjetas("alegria.jpg", "Alegria");
crearTarjetas("verguenza.jpg", "Verguenza");
crearTarjetas("aburrimiento.jpeg", "Aburrimiento");
crearTarjetas("ansiedad.jpg", "Ansiedad")
crearTarjetas("envidia.jpg", "Envidia");
crearTarjetas("furia.jpeg", "Furia") */

//

const imagenTarjeta = document.getElementsByClassName("img");

imagenTarjeta.addEventListener("click",()=>{
     
})