const express = require('express')

const api = express()




// Root routes


api.get('/platform', (req, res) =>{
    res.send({
        appName: "SkyAura",
        supportEmail: "hello@skyaura.net",
        moderationEmail: "moderation@skyaura.net",
        supportURL: "https://support.skyaura.net",
        moderationURL: "https://moderation.skyaura.net",


    })
})













api.all('*', (req, res) =>{
    res.status(404)
    res.send({error: 404})
    console.log('incoming request')
    
})










api.listen(8080)