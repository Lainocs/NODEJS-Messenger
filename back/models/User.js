import mongoose from "mongoose"

var Schema = mongoose.Schema;

var user = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

mongoose.models = {}

var User = mongoose.model('User', user)

export default User