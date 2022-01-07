const mongooose = require('mongoose')

var schema = new mongooose.Schema(
    {
    userId: { 
        type: mongooose.Schema.Types.ObjectId, 
        ref: 'userdb' 
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongooose.model('messagedb', schema)
