class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre) {
        let persona = { id, nombre };
        this.personas.push(persona);
        return this.personas;
    }

    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];
        console.log(persona)
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSalas() {

    }

    borrarPersona(id) {
        let persona = getPersona(id);
        this.personas = this.personas.filter(persona => persona.id !== id);
        return persona;
    }


}

module.exports = Usuarios;