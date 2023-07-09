const mongoose = require('mongoose')
const Schema = mongoose.Schema
const linkSchema = Schema({
    userId: {
        type: String,
    },
    longUrl: {
        type: String , 
        required: true 
    } ,
    shortUrl: {
        type: String, 
        required: true 
    } ,
    metaData: {
        type: String, 
    } ,
    generatedUrl: {
        type: String,
    },
}, {
    timestamps: true
})

const Link = mongoose.model('Link' , linkSchema)
module.exports = Link