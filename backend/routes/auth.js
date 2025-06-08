
const express = require('express')
const User = require('../models/User')
const router = express.Router()


// ROUTE 1: Create a user using :POST "/api/auth/createuser".
router.post('/signup',
    async (req, res) => {
        let success = false;
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email  already exists" })
            }
            user = await User.create({
                username: req.body.name,
                password: req.body.password,
                email: req.body.email
            })
            success = true
            res.status(200).json({ "success": success })

        }

        catch (error) {
            console.error(error.message)
            res.status(500).send("INTERNAL SERVER ERROR")
        }
    })

    // for the login purpose
    router.post('/login',
    async (req, res) => {
        // let success = false;
        try {

            let user = await User.findOne({ username: req.body.name });
            console.log(req.body.name,req.body.password)
            if(!user){
                res.status(200).json({ "success": false })

            }
           if(user.password==req.body.password)
            res.status(200).json({ "success": true })

        }

        catch (error) {
            console.error(error.message)
            res.status(500).send({"success":false,"error":"INTERNAL SERVER ERROR"})
        }
    })



module.exports = router