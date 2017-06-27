var express = require('express')
var app     = express()

//modules
const jadwalSholat = require('./modules/jadwal-sholat')
const klasemen     = require('./modules/klasemen-isl')
const university   = require('./modules/university')
const kbbi         = require('./modules/kbbi')

app.get('/api/jadwal-sholat', (req, res) => {
    jadwalSholat('cirebon').then((response) => {
         res.setHeader('Content-Type', 'application/json')
         res.send(JSON.stringify({
             error : 0,
             data : response.data
         }))
    })
    .catch(function(error){
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({
            error : 1,
            msg: 'unable to get data'
        }))
    })
})

app.get('/api/klasemen', (req,res) => {
    klasemen.grab().then((response) => {
        console.log(response)
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({
            error : 0,
            data: response
        }))
    })
    .catch((error) => {
        console.log(error)
    })
})

app.get('/api/university/:name', (req,res) => {
    let keyword = req.params.name
    university(keyword).then((response) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({
             error : 0,
             data : response
        }))
    })
    .catch((error) => {
        console.error(error)
    })
})

app.get('/api/kbbi/:keyword', (req,res) => {
    let keyword = req.params.keyword
    kbbi(keyword).then((response) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({
             error : 0,
             data : response
        }))
    })
    .catch((error) => {
        console.error(error)
    })
})

app.listen(3000, () => {
    console.log('server is starting at 3000')
})