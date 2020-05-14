const { getUsuarioLogado } = require ('../resolvers/comum/usuario')
const Usuario = require('../models/Usuario')

const getUsuario = async nomePerfil => {
    const res = await Usuario.findOne({ perfil: nomePerfil })
    return res ? res : null
}

module.exports = async req => {
    const usuario = await getUsuario('MASTER')
    if(usuario) {
        const { token } = await getUsuarioLogado(usuario)
        req.headers = {
            authorization: `Bearer ${token}`
        }
    }
}

