const { Messagedb, search } = require('../models/Message');
var Userdb = require ('../models/User')

exports.create = (req, res) => {
    console.log("zizi")
    if(!req.body) {
        res.status(400).send('Request body is missing !')
        return
    }

    const user = new Userdb.search

    // Create message
    const message = new Messagedb({
        userId: user.id,
        content: req.body.content,
    })

    message.save(message).then((result) => {
        res.redirect('add-message')
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "An error has occurred"
        })
    })
}