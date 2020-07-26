// importa el/los modulo
const fs = require('fs');

// rea un archivo con codigo asincrono

// fs.writeFile('./texto.txt', 'linea uno', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('archivo creado')
// });


//lee lo del archivo de manera asincrona

fs.readFile('./texto.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

// console.log('ultima linea de codigo')
