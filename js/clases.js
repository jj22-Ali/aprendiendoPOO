class Pokemon {

    #tipo; //propiedad privada
    #naturaleza; //propiedad privada
    #numero; //propiedad privada

    constructor(nombre, tipo, naturaleza, numero, peso){

        this.nombre = nombre;
        this.#tipo = tipo;
        this.#naturaleza = naturaleza;
        this.#numero = numero;
        this.peso = peso;

    }

    // propiedades get / set

    get tipo(){
        return this.#tipo;
    }

    set tipo(nuevotipo){
        this.#tipo = nuevotipo;
    }
    get numero(){
        return this.#numero;
    }

    set numero(nuevonumero){
        this.#numero = nuevonumero;
    }
    get naturaleza(){
        return this.#naturaleza;
    }

    set naturaleza(nuevonaturaleza){
        if(nuevonaturaleza.length  >= 3){

            this.#naturaleza = nuevonaturaleza;

        } else {
            alert("Ingrese una naturaleza mayor a 3 caracteres")
        }
    }

    mostrarDatos(){
        document.write(`<h2>Pokemon: ${this.nombre}</h2> 
        <ul>
            <li>Num pokedex: ${this.numero}</li>
            <li>Naturaleza: ${this.naturaleza}</li>
            <li>Tipo: ${this.tipo}</li>
            <li>Peso: ${this.peso} kg</li>
           
        </ul>`)
        
    }
}

class PokemonLegendario extends Pokemon{

    #rareza;
    #habilidad; 

    constructor(nombre, tipo, naturaleza, numero, peso, rareza, habilidad){

        super(nombre, tipo, naturaleza, numero, peso);
        this.#rareza = rareza;
        this.#habilidad = habilidad;

    }

    get rareza(){
        return this.#rareza
    }
    set rareza(nuevaRareza){
        this.#rareza = nuevaRareza;
    }

    get habilidad(){
        return this.#habilidad;
    }
    set habilidad(nuevaHabilidad){
        this.#habilidad = nuevaHabilidad;
    }

    
    mostrarDatos(){
        document.write(`<h2>Pokemon: ${this.nombre}</h2> 
        <ul>
            <li>Num pokedex: ${this.numero}</li>
            <li>Naturaleza: ${this.naturaleza}</li>
            <li>Tipo: ${this.tipo}</li>
            <li>Peso: ${this.peso} kg</li>
            <li>Rareza: ${this.rareza}</li>
            <li>Habilidad: ${this.habilidad}</li>
           
        </ul>`)
        
    }

}

//comun, raro, leyenda


const pikachu = new Pokemon('Pikachu','Electrico', 'timido', 25, 6);
console.log(pikachu)

document.write(`<p>Tipo: ${pikachu.tipo}</p>`);
//modificar el tipo

pikachu.tipo = 'Agua-Electrico';

document.write(`<p>Tipo: ${pikachu.tipo}</p>`);

pikachu.naturaleza = 'cagon';
console.log(pikachu)

pikachu.mostrarDatos();

const bulbasur = new Pokemon('bulbasur', 'planta', 'esquizofrenico', 1, 4.6)

bulbasur.mostrarDatos()

const Mewtow = new PokemonLegendario('mewtwo', 'Psquico', 'agresivo', 150, 122, 'Leyenda', 'Poderes mentales')

Mewtow.mostrarDatos()