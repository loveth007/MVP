const Link = require ("../models/links");
const linkSchemaValidator = require("../validations/validation")
const {removeProtocol} = require("../helpers/helpers")
const { nanoid } = require('nanoid');

const generateShortURL = async (req , res) => {

// validating user input using joi
    const {error} = linkSchemaValidator(req.body)
    if (error) return res.status(400).json({
        success: false,
        message: error.details[0].message
    })

    try {
        const {long, custom} = req.body
        let baseUrl = "slicr.onrender.com"
        let generatedUrl;
        let backHalf;

        if (custom) {
            const isExisting = await Link.findOne({shortUrl: custom})
            if (!isExisting) {
                backHalf = custom
            } else {
                return res.status(400).json({
                    success: false,
                    message: "back half already exists"
                })
            }

        }else {
            backHalf = nanoid(6);
        }
        generatedUrl = `${baseUrl}/${backHalf}`
        const newLink = await Link.create({shortUrl : backHalf, longUrl: removeProtocol(long), generatedUrl })
        return res.status(200).json({
            success: true,
            message: "URL shortened Successfully",
            data: newLink
        })

    } catch (err) {
        
    res.status(500).send(err)
          
    }
}




module.exports = {
    generateShortURL,
}