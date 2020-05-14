const bcrypt = require('bcryptjs')
const Usuario = require('../../models/Usuario')

const mutations = {
    registrarUsuario(parent, { dados }) {
        
        return mutations.adicionarUsuario(parent, {
            dados: {
                nome: dados.nome,
                email: dados.email,
                senha: dados.senha
            }
        })
    }, 
    async adicionarUsuario(parent, { dados }, context, info) {
        context && context.validarAdmin() //somente usuário ADMINISTRADOR pode incluir um novo

        //se nao existir perfil, usuario comum
        if (!dados.perfil || !dados.perfil.length) {
            dados.perfil = 'COMUM'
        }

        //somente um usuário MASTER pode incluir uma ADMINISTRADOR
        if (dados.perfil === 'ADMINISTRADOR') {
            context && context.validarMaster()
        }

        //Verifica se o e-mail já está no cadastro
        const emailExistente = await Usuario.findOne({ email: dados.email })
        if (emailExistente) {
            throw new Error ('E-mail cadastrado')
        }

        //Criptografia da senha
        const salt = bcrypt.genSaltSync(10)
        dados.senha = bcrypt.hashSync(dados.senha, salt)

        const usuario = await Usuario.create({
            nome: dados.nome,
            email: dados.email,
            senha: dados.senha,
            perfil: dados.perfil
        })

        return usuario
    },
    async editarUsuario(parent, { id, dados }, context, info) {
        context && context.validarUsuarioFiltro(dados)
        // //await Joi.validate(dados, schemaEditarProcurador, { abortEarly: false })
        // // se for alterar a senha tem que criptografar
        // if (dados.senha) {
        //     const salt = bcrypt.genSaltSync(10)
        //     dados.senha = bcrypt.hashSync(dados.senha, salt)
        // }

        // const usuario = await Usuario.findOneAndUpdate(id, dados, { new: true })
        // return usuario
    },
    async excluirUsuario(parent, { id }, context, info) {
        context && context.validarAdmin()
        const usuario = await Usuario.findByIdAndRemove(id)

        return usuario
    }

}

module.exports = mutations
