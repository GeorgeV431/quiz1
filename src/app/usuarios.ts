export interface Usuarios {
    nombre:string;
    apellido:string;
    genero:string;
    pais:string;
    ciudad:string;
}

export const listaUsuarios:Array<Usuarios>=[
    {
        nombre:"Juan",
        apellido:"Perez",
        genero:"Hombre",
        pais:"Chile",
        ciudad:"Chillan"
    },
    {
        nombre:"Pedro",
        apellido:"Perez",
        genero:"Hombre",
        pais:"Argentina",
        ciudad:"Buenos Aires"
    },
    {
        nombre:"Paula",
        apellido:"Perez",
        genero:"Mujer",
        pais:"Chile",
        ciudad:"Santiago"
    },
    {
        nombre:"Jose",
        apellido:"Perez",
        genero:"Otro",
        pais:"Peru",
        ciudad:"Lima"
    },
    {
        nombre:"Pepe",
        apellido:"Ortiz",
        genero:"Otro",
        pais:"Chile",
        ciudad:"Arica"
    },
    {
        nombre:"Manuel",
        apellido:"Concha",
        genero:"Hombre",
        pais:"España",
        ciudad:"Madrid"
    }
]