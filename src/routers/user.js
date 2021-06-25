const express = require('express')
require('../db/mongoose')
const User = require('../model/user')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body) 
    console.log(user)
    try{
        await user.save()
        res.status(200).send()
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/users', async (req, res) => {
    try{
        const users = await User.find({})
        res.status(200).send(users)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try{
        const users = await User.findByIdAndDelete(req.params.id)
        res.status(200).send(users)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router
