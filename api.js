const express = require('express')

const api = express()

var bodyParser = require('body-parser')


api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json())
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

api.get('/versions', (req, res) =>{
    res.send({
        release: "2024.12.01.1028",
        preRelease: null,
        cloudAllowed: ['2024.12.01.1028'],
        cloudBlacklisted: [],
        api: '2024.12.04.0436'
    })
})

api.get('/population', (req, res) =>{
    res.send({
        platforms: {
            windows: 0,
            linux: 0,
            android: 0,
            other: 0
        },
        makeup:{
            vr: 0,
            desktop: 0
        },
        total: 0
    })
})









api.all('*', (req, res) =>{
    res.status(404)
    res.send({error: 404})
    console.log('incoming request')
    console.log(req.headers['user-agent'])
    
})










api.listen(8080)