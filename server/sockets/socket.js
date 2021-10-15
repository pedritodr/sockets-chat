const { io } = require('../server');
const Usuarios = require('../classes/usuarios');

const usuarios = new Usuarios();

io.on('connection', (client) => {



    client.on('EntrarChat', (usuario, callback) => {
        if (!usuario.nombre) {
            return callback({
                error: true,
                mensaje: 'El nombre es necesario'
            })
        }
        const personas = usuarios.agregarPersona(client.id, usuario.nombre);
        client.broadcast.emit('listaPersona', usuarios.getPersonas());
        callback(personas);
    });

    client.on('disconnect', () => {
        const personaBorrada = usuarios.borrarPersona(client.id);
        client.broadcast.emit('crearMensaje', { usuario: 'Adminsitrador', mensaje: `${personaBorrada.nombre} abandonó la sala de chat` });
        client.broadcast.emit('listaPersona', usuarios.getPersonas());
    });



});