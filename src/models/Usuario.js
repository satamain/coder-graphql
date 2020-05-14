const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
        // ,
        // validate: {
        //     validator: (email) => Usuario.doesntExist({ email }),  // validação para nao poder cadastrar mais de um e-mail igual
        //     message: ({ value }) => `O e-mail ${value} já está sendo utilizado`
        // }
    },
    senha: {
        type: String,
        required: true
    },
    perfil: {
        type: String,
        required: false
    }
}, 
{
    timestamps: true,
    collection: 'usuario'
})

const Usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = Usuario