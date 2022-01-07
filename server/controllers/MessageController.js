const Message = require('../models/Message');
const User = require("../models/User");
const {log} = require("nodemon/lib/utils");

exports.create = async (req, res) => {
    if(!req.body) {
        res.status(400).send('Request body is missing !')
    }

    const { content, id } = req.body;

    console.log(content, id)

    const user = await User.findOne({ id });

    // Create message
    const message = new Message({
        userId: user._id,
        content: content,
    })

    message.save(message).then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "An error has occurred"
        })
    })
}