// Ivan Castillo
// Laboratorio 4

// Objeto de un miembro del Servidor de Discord
const friend = {
    nameUser: "aedendj",
    id: "aedendj",
    descripcion: "Solo llame para juegar",
    email: "aedendj.edwin@gmail.com",
    rol: ["friend", "Player", "videogame_partner"],
    status: "online",
    friends:["ivan_java", "santy1105"],
    sendMail (){
        return `send email to ${this.friends[1]}`
    }
}

// Ver informacion
console.log(friend)
console.log(friend.sendMail())


// Eliminar propiedades
delete friend.status
console.log(friend)

// Desestructuración
const {nameUser,status,friends} = friend
console.log(nameUser)
console.log(status)
console.log(friends)

// Segundo objeto de amigos de algun miembro
const server_friend = {
    status: true,
    listfriends: ["aedendj", "santy1105", "ivan_java"],
    sendEmail(){
        return `Send email to ${server_friend.listfriends[0]}`
    }
}

console.log(server_friend.sendEmail())


// Concatenar dos objetos
const allInformation = {...friend, ...server_friend}
console.log(allInformation)

//Agregar propiedades
friend.hasPFP = true
server_friend.hasPFP = true

//Congelar objeto
Object.freeze(friend)
console.log(Object.isFrozen(friend));
friend.hasPFP = false
console.log(friend);

//Sellar objeto
Object.seal(server_friend)
console.log(Object.isSealed(server_friend))
server_friend.hasPFP = false
console.log(server_friend);