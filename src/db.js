const mongoose = require('mongoose')

process.env.APP_AUTH_SECRET

const DB_USERNAME = process.env.APP_DB_USERNAME
const DB_PASSWORD = process.env.APP_DB_PASSWORD
const DB_HOST = process.env.APP_DB_HOST
const DB_NAME = process.env.APP_DB_NAME

const db = mongoose
    .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log("DB connected"))
    .catch(err => console.error(err)
)

module.exports = db
