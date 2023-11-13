//objetos con notación literal

let pelicula = {
    // propiedades --> llave : valor
    // las propiedades de los objetos también van con minuscula
    titulo: "Batman", 
    duracionEnHoras: 3,
    estado: true,
    descripcion: 'batman explora la corrupción existente en la ciudad de Gotham y el vinculo de esta con su propia familia. Además, entre en conflicto con un asesino en serie conocido como el "El acertijo"', 
    reparto: ['Robert Pattinson', ' zoe kravitz'],
    
    // metodos 
    play : function(){
        console.log(this)
        document.write(`<p>... Comenzo la pelicula ${this.titulo}</p>`)
    },

    pausa : () =>{
        console.log(this)
        document.write(`<p>Peli en pausa</p>`)
    }
    
};

console.log(pelicula)
//document.write(pelicula)
document.write(`<h2>Pelicula: ${pelicula.titulo}</h2>`)
document.write(`<p>Descripción: ${pelicula.descripcion}</p>`)
document.write(`<p>Duración: ${pelicula['duracionEnHoras']}</p>`)

//metodo del objeto Object
console.log(pelicula.hasOwnProperty('reparto'))
console.log(pelicula.hasOwnProperty('precio'))

//agregar mas propiedades 

pelicula.precio = 640;
console.log(pelicula)
document.write(`<p>Precio anterior: ${pelicula.precio}</p>`)

//modificar una propiedad 

pelicula.precio = 840;
document.write(`<p>Precio actualizado: ${pelicula.precio}</p>`)
document.write(`<p>Fecha de estreno: ${pelicula.Fecha}</p>`)

//Eliminando una propiedad
delete pelicula.reparto
console.log(pelicula)

pelicula.play()
pelicula.pausa()



