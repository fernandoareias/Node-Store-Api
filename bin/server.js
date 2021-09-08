// Pacotes essenciais para criar o web server
// npm install http express debug --save
// npm install nodemon --save-dev --> só possui esse cara durante tempo de desenvolvimento
// nodemon -> dotnet watch run

// Força ao JS ser criterioso 
'use strict'

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');


const port = normalizePort(process.env.port || '3000');
app.set('port', port);


const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log("APi Rodando na porta: ", port);


// Normaliza a port
function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port))
        return val;

    if(port >= 0)
        return port;
    
    return false;
}

// Tratamento de erros

function onError(error){
    if(error.syscall !== 'listen')
        throw error;
    
    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;
    
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' necessita de privilégio.');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' porta ja está em uso.');
                process.exit(1);
                break;
            default:
                throw error;
                
        }

}

// Inicia o debug

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    
        debug('Listening on ' + bind);
}