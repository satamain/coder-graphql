const bcrypt = require('bcryptjs')
const { getUsuarioLogado } = require('../comum/usuario')
const Usuario = require('../../models/Usuario')

module.exports = {
    async login(parent, { dados }, context, info) {
        const usuario = await Usuario.findOne({ email: dados.email })
        
        if (!usuario) {
            throw new Error('Usuário/senha inválido')
        }

        const saoIguais = bcrypt.compareSync(dados.senha, usuario.senha) //compara a senha fornecida no login e a do banco de dados

        if(!saoIguais) {
            throw new Error('Usuário/senha inválido')
        }

        return getUsuarioLogado(usuario)

    },
    usuarios(parent, args, context, info) {
       // context && context.validarAdmin()
       
       return Usuario.find()
    },
    usuario(parent, args, context, info) {
        return 'usuario'
    }
}