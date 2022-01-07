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

// exports.search = (req, res) => {
//     Messagedb.find({}, (err, docs) => {
//         console.log("Aller la")
//     })
// }