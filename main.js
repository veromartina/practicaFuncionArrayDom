let ul = document.getElementById("contenedor-tarjetas");



//funcion para crear cada tarjeta 
const crearTarjetas = function(imagen, nombre, id){
    
    let li = document.createElement("li");
    li.classList.add("tarjeta");
    ul.append(li);

    let img = document.createElement("img");
    img.classList.add("imagenTarjeta")

    //img.setAttribute("id" , "");
    //img.id = id;   PUEDO USARLO PARA NOMBRAR EL ID CON SOLO UN NRO
    img.id = `imagen-${id}`;  // LO USO PARA DARLE UN ID CON STRING Y NRO


    img.src = `imagenes/${imagen}`;
    li.append(img);

    let div = document.createElement("div");
    div.classList.add("info-tarjetas");
    li.append(div);

    let h3 =document.createElement("h3");
    h3.innerText = nombre;
    div.append(h3);

}

//creo un id para cada imagen

function generarId(nro){
    let id = 1;
    return id = id + nro
    }

// FUNCION CON ARRAY PARA AGREGAR LAS TARJETAS EN EL CONTENEDOR "ul"

const imagenes = ["alegria.jpg", "verguenza.jpg","aburrimiento.jpeg","ansiedad.jpg","envidia.jpg","furia.jpeg"];
const nombres = ["Alegria","Verguenza","Aburrimiento","Ansiedad","Envidia","Furia"];
for (let indice = 0 ; indice < imagenes.length; indice ++){
    let id = generarId(indice); //uso indice x q es el valor a ejecutar,aprovecho en este caso el indice
    crearTarjetas(imagenes[indice], nombres[indice], id);
}






