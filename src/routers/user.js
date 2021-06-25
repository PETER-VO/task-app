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



module.exports = router
