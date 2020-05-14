const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi);

const credor = Joi.objectId().required().label('Credor')
const devedor = Joi.objectId().required().label('Devedor')

const credorUpdate = Joi.objectId().label('Credor')
const devedorUpdate = Joi.objectId().label('Devedor')

const valor = Joi.number().label('Valor')
const tipo = Joi.string().label('Tipo')
const status = Joi.string().label('Status')
const observacoes = Joi.string().label('Observações')

const schemaAdicionarCredito = Joi.object().keys({
    credor,
    devedor,
    valor,
    tipo,
    status,
    observacoes
})

const schemaEditarCredito = Joi.object().keys({
    credor: credorUpdate,
    devedor: devedorUpdate,
    valor,
    tipo,
    status,
    observacoes
})


module.exports = {
    schemaAdicionarCredito,
    schemaEditarCredito
}