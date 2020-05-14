const { Usuario } = require('../models')
//const jwt = require('jsonwebtoken')
const jwt = require('jwt-simple')

module.exports =  async ({ req }) => {
    //em desenvolvimento
    //await require('./simularUsuarioLogado')(req)

    const auth = req.headers.authorization
    console.log(auth)
    const token = auth && auth.substring(7)


    let usuario = null
    let admin = false
    let master = false

    // if (token) {
    //     console.log(token)
    //     try {
    //         let conteudoToken = jwt.verify(token, process.env.APP_AUTH_SECRET)
    //         // if (new Date(conteudoToken.exp * 1000) > new Date()) {
    //         //     usuario = conteudoToken
    //         // }
    //         usuario = conteudoToken
    //     } catch(e) {
    //         //token inválido
    //     }
    // }
    if(token) {
        try {
            let conteudoToken = jwt.decode(token,
                process.env.APP_AUTH_SECRET)
            if(new Date(conteudoToken.exp * 1000) > new Date()) {
                usuario = conteudoToken
            }
        } catch(e) {
            // token inválido
        }
    }
   


    if (usuario && usuario.perfil) {
        admin = false
        if (usuario.perfil === 'ADMINISTRADOR') {
            admin = true
        }

        if (usuario.perfil === 'MASTER') {
            admin = true
            master = true
        }
    }

    const err = new Error('Acesso negado!')
    
    return {
        usuario,
        admin,
        master,
        validarUsuario() {
            if (!usuario) throw err
        },
        validarAdmin() {
            if (!admin) throw err
        },
        validarMaster() {
            if (!admin) throw err
            if (!master) throw err
        },
        validarUsuarioFiltro(filtro) {
            if (admin) return

            if (!usuario) throw err

            if (!filtro) throw err
            
            const {id, email } = filtro
            if (!id && !email) throw err
            if (id && id !== usuario.id) throw err
            if (email && email !== usuario.email) throw err
        }
    }
}



