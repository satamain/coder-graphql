//const jwt = require('jsonwebtoken')
const jwt = require('jwt-simple')

module.exports = {
    async getUsuarioLogado(usuario) {
        const agora = Math.floor(Date.now() / 1000)

        const authSecret = process.env.APP_AUTH_SECRET

        const usuarioInfo = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            perfil: usuario.perfil,
            iat: agora,
            exp: agora + (3 * 24 * 60 * 60)
        }

        //Teste com jsonwebtoken
        // return {
        //     ...usuarioInfo,
        //     token: jwt.sign(
        //         { usuario: usuarioInfo },
        //         authSecret,
        //         { expiresIn: 1800 }
        //     )
        // }

        return {
            ...usuarioInfo,
            token: jwt.encode(usuarioInfo,
                authSecret)
        }
    }
}