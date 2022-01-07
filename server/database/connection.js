const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        // mongodb connection string
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(e) {
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB