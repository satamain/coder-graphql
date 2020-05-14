# coder-graphql

Repositório para buscar ajuda.

Quando adiciono console.log(req.headers) no src/config/context.js , retorna isso:

{
  host: 'localhost:4000',
  connection: 'keep-alive',
  'content-length': '181',
  accept: '*/*',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
  'content-type': 'application/json',
  origin: 'http://localhost:4000',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-mode': 'cors',
  'sec-fetch-dest': 'empty',
  referer: 'http://localhost:4000/',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
}

console.log(auth) sempre retorna undefined

Não aparece authorization nos meus headers, não sei o que fazer. Acredito que possa ser alguma configuração do ApolloServer, mas estou emperrado.
