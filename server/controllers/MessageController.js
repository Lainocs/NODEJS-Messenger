let Messagedb = require('../models/Message');

exports.create = (res, req) => {
    if(!req.body) {
        res.status(400).send('Request body is missing !')
        return
    }

    // Create message
    const message = new Messagedb({
        userId: req.body.userId,
        content: req.body.content
    })

    message.save(message).then((result) => {
        res.redirect('add-message')
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "An error has occurred"
        })
    })
}