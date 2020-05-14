const credito = require('./credito')
const credor = require('./credor')
const devedor = require('./devedor')
const procurador = require('./procurador')
//const usuario = require('./usuario')

module.exports = {
    ...credito,
    ...credor,
    ...devedor,
    ...procurador
}