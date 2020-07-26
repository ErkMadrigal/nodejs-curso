// importamos el http
const http = require('http');

// el paquete instalado desde npm colors
const colors = require('colors');

// funcion ecargada de lo que tiene que hacer el servidor
const handelServer = (req, res) => {
    res.writeHead(200, {'Conten-type': 'text/html'})
    res.write('<h1>hola mundo</h1>');
    res.end()
}

//crea el servidor
const server = http.createServer(handelServer);

// se escuchara en el puerto definido con un mensaje 
server.listen(3000, () => {
    // utilizando el paquede de npm en el mensaje en consola
    console.log('server on port 3000'.cyan)
});