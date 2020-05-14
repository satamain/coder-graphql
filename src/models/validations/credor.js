const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi);

const nome = Joi.string().required().label('Nome')
const nomeUpdate = Joi.string().label('Nome')
const isPF = Joi.boolean().label('Pessoa Física')
const documento = Joi.string().min(6).label('Documento')
const endereco = Joi.string().min(6).label('Endereço')
const numero = Joi.string().label('Número')
const complemento = Joi.string().label('Complemento')
const bairro = Joi.string().label('Bairro')
const cidade = Joi.string().min(6).label('Cidade')
const estado = Joi.string().min(2).label('Estado')
const cep = Joi.string().min(8).label('CEP')
const telefone = Joi.string().min(10).label('Telefone')
const email = Joi.string().email().label('E-mail')
const observacoes = Joi.string().min(10).label('Observações')
const classe = Joi.number().min(1).label('Classe')
const status = Joi.number().min(1).label('Status')
const devedores = Joi.array().unique().items(
  Joi.objectId().label('Devedor')
).label('Devedores')
const procuradores = Joi.array().unique().items(
  Joi.objectId().label('Procurador')
).label('Procuradores')
const creditos = Joi.array().unique().items(
  Joi.objectId().label('Crédito')
).label('Créditos')


const schemaAdicionarCredor = Joi.object().keys({
  nome,
  isPF,
  documento,
  endereco,
  numero,
  complemento,
  bairro,
  cidade,
  estado,
  cep,
  telefone,
  email,
  observacoes,
  classe,
  status,
  devedores,
  procuradores,
  creditos
})

const schemaEditarCredor = Joi.object().keys({
  nome: nomeUpdate,
  isPF,
  documento,
  endereco,
  numero,
  complemento,
  bairro,
  cidade,
  estado,
  cep,
  telefone,
  email,
  observacoes,
  classe,
  status
})


module.exports = {
  schemaAdicionarCredor,
  schemaEditarCredor
}