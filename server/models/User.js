const mongooose = require('mongoose')

const schema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: String,
    status: String

})

module.exports = mongooose.model('userdb', schema)