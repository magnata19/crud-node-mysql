const express = require('express')


const {engine} = require('express-handlebars')

const app = express();

//configuração express handlebars
app.engine('handlebars', engine())
app.set('view engine','handlebars')
app.set('views', './views')

const mysql = require('mysql2')

const conexao = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'produtos'
})

conexao.connect((err) => {
  if(err) new Error(err)
  console.log('conectou com sucesso')
})

app.get('/', (req, res) => {
  res.render('formulario')
})

app.listen(8080, () => {
  console.log('server on')
})