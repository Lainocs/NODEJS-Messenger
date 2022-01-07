const mongooose = require('mongoose')

var schema = new mongooose.Schema({
    userId: { type: mongooose.Schema.Types.ObjectId },
    content: String
})

const Messagedb = mongooose.model('messagedb', schema)

module.exports = Messagedb