const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bedwing06:b4b31s31m11@cluster0.gzt76.mongodb.net/midb?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () =>{
    const user = new User({ username: 'chanchito feliz', edad: 25 })
    const savedUser = await user.save()
    console.log(savedUser)
}
//crear()
const buscarTodo = async () =>{
    const users = await User.find();
    console.log(users)
    
}
//buscarTodo()

const buscar = async () => {
    const user = await User.find({username:'chanchito feliz'})
    console.log(user)
}
//buscar()

const eliminal = async ()=>{
    const dele = await User.deleteOne({})
    console.log(dele)
}
//eliminal()
const buscarOne = async ()=>{
    const user = await User.findOne({username: 'felipe' })
    console.log(user)
}
//buscarOne()