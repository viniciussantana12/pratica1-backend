const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("servidor iniciado")
})

//GET
app.get('/usuarios', (req, res) => {
    console.log(req.query)
    console.log("API get todos")
    res.status(200).send("todos os usuarios")
})

//GET by ID
app.get('/usuarios/:id', (req, res) => {
    console.log("API get por id")
    res.status(200).send(req.params.id)
})

//POST
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    console.log("API post usuário")
    res.status(200).send(req.body)
})

//PUT
app.put('/usuarios/:id', (req, res) => {
    console.log("API put usuário")
    res.status(200).send(req.params.id)
})

//DELETE
app.delete('/usuarios/:id', (req, res) => {
    console.log("API delete usuários")
    res.status(200).send(req.params.id)
})