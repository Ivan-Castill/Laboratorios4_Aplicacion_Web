// Ivan Castillo
// Laboratorio 4

// Arreglos
let serverUsers  = [

    {
        nameUser: "ivan_java",
        rol: ["admin","Server Leader"],
        status: "online"
    },

    {
        nameUser: "aedendj",
        rol: ["friend","videogame partner"],
        status: "offline"
    },

    {
        nameUser: "santy1105",
        rol: ["friend","videogame partner"],
        status: "offline"
    }
]

// desestructuracion 
    let {nameUser, rol, status} = serverUsers[2]
    console.log(rol);

//metodo - sort ==> sirve para ordenar la informacion alfabeticamente.
    //extraemos los names
    let nameSort = serverUsers.map(user => user.nameUser)
    // y los ordena
    console.log(nameSort.sort());

//rest operator
const [val1,...rest] = serverUsers
console.log(val1)// primer valor o array de serverUsers q es nameuser= ivan
console.log(rest)// los dos valores del array q fataban 
// recorre todo el array imprimiendolo
serverUsers.forEach(name => {
    console.log(name);
});
// recore todo el array imprimiendolo, aunque devuelve un nuevo arreglo con los resultados de la función.
serverUsers.map(name => {
    console.log(name);
});

//Recorrido==> recorre todos los elementos de un arreglo, uno por uno, e imprime cada elemento en la consola.
for (let i = 0; i < serverUsers.length; i++) {
    console.log(serverUsers[i]);
}