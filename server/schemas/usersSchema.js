const mongoose = require(`mongoose`)

const Schema = mongoose.Schema;
const usersSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userAge: {
        type: Number,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userPassword: {
        type: String,
        required: true,
    }
})

const users = mongoose.model(`usersSchema`, usersSchema)

module.exports = users

