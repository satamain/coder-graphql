const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi);

const nome = Joi.string().required().label('Nome')
const nomeUpdate = Joi.string().label('Nome')
const cpf = Joi.string().label('CPF')
const oab = Joi.string().label('OAB')
const oab_uf = Joi.string().min(2).max(2).label('OAB UF')
const telefone = Joi.string().label('Telefone')
const email = Joi.string().email().label('E-mail')
const credores = Joi.array().unique().items(
    Joi.objectId().label('Credor')
).label('Credores')


const schemaAdicionarProcurador = Joi.object().keys({
    nome,
    cpf,
    oab,
    oab_uf,
    telefone,
    email,
    credores
})

const schemaEditarProcurador = Joi.object().keys({
    nome: nomeUpdate,
    cpf,
    oab,
    oab_uf,
    telefone,
    email
})


module.exports = {
    schemaAdicionarProcurador,
    schemaEditarProcurador
}