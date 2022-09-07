
//Desesctructuracion del objeto
const datosUsuario={
    nombre: "Bercy ",
    Apellido:"Burgos",
    correo:"bervi98@gmail.com",
    Id:435466

};

function getContactInfo({nombre,Apellido,correo}){
    return `${nombre}${Apellido} su correo de contacto es ${correo}`;
}


document.write("El nombre completo del usuario es "+getContactInfo(datosUsuario))

//Creacion de una copia del objeto

let copyOfuser={...datosUsuario};

console.log({copyOfuser});

//Operador Logico AND

let Primercontacto=true;
let Segundocontacto=false;
let resultadoFinal= Primercontacto&&Segundocontacto;

console.log("El resultado final de la validacion del contacto es: "+resultadoFinal)

//Operador Logico OR

let resultadoOR =Primercontacto||Segundocontacto;

console.log("El resultado final de la validacion del contacto usando OR es: "+resultadoOR)



