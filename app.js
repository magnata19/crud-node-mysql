const express = require('express')
const app = express();

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
  res.write('hello ')
  res.end()
})

app.listen(8080, () => {
  console.log('server on')
})