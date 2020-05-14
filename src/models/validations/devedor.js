const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi);

const razao_social = Joi.string().required().label('Razão social')
const razao_socialUpdate = Joi.string().label('Razão social')
const cnpj = Joi.string().min(18).label('CNPJ')
const numero_processo = Joi.string().min(10).label('Número do processo')
const comarca = Joi.string().min(4).label('Comarca')
const data_decretacao_rj = Joi.string().min(10).label('Data da decretação da RJ')
const data_decretacao_falencia = Joi.string().min(10).label('Data da decretação da falência')
const credores = Joi.array().min(1).max(100).unique().items(
    Joi.objectId().label('Credor')
).label('Credores')


const schemaAdicionarDevedor = Joi.object().keys({
    razao_social,
    cnpj,
    numero_processo,
    comarca,
    data_decretacao_rj,
    data_decretacao_falencia,
    credores
})


const schemaEditarDevedor = Joi.object().keys({
    razao_social: razao_socialUpdate,
    cnpj,
    numero_processo,
    comarca,
    data_decretacao_rj,
    data_decretacao_falencia
})


module.exports = {
    schemaAdicionarDevedor,
    schemaEditarDevedor
}