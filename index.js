const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app)

const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})