const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controle')
const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://usuario:tucontraseña@cluster0.gzt76.mongodb.net/midb?retryWrites=true&w=majority')

app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

app.use(express.static('app'))

app.get('/', (req, res)=>{
    
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res)=>{
    res.status(404).send('esta pagina no exixte')
})
app.listen(port, () =>{
    console.log('arrancando la aplication')
})
