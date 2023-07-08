const express = require('express')
const router = express.Router();

const {
    generateShortURL,
} = require ('../controllers/linkController')



router.post('/shorten' , generateShortURL)


module.exports = router