const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Criei a minha primeira rota utilizando o express')
});

router.get('/parametro/:id', (req, res) => {
    //Há duas formas de recuperarmos o parâmetro passado na requisição
    const { id } = req.params;
    const id2 = req.params.id;

    res.send(`O parâmetro enviado é: ${id} ou ${id2}`)
})

router.post('/parametro', (req, res) => {
    const { id } = req.body

    res.send(`ID: ${id}`)
})

module.exports = (app) => app.use('/', router)