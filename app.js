
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



