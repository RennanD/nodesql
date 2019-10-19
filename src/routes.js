const routes = require('express').Router()

routes.get('/', (req, res) => { 
    return res.json({ok: true})
})

module.exports = routes