const mongooose = require('mongoose')

var schema = new mongooose.Schema({
    userId: { type: mongooose.Schema.Types.ObjectId, ref: 'userdb' },
    content: {
        type: String,
        required: true
    }
})

const Messagedb = mongooose.model('messagedb', schema)

module.exports = Messagedb