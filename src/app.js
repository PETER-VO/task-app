const express = require('express')
const {User} = require('./model/user')
require('./db/mongoose')

const app = express()

const port = process.env.PORT

const user = new User({
    name: 'Phong',
    age: 22
})

user.save().then(() => {
    console.log(user)
}).catch((error) => {
    console.log(error)
})


app.listen(port, () => {
    console.log('Server is up on port', port)
})
