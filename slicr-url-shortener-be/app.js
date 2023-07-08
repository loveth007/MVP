const express = require ('express')
const app = express()
const linkRouter = require("./src/routes/linkRoutes")
const cors = require("cors")
const Link = require("./src/models/links")
const dotenv = require('dotenv')
const connectToDatabase = require('./src/config/config')



dotenv.config();

const port = process.env.HTTP_PORT

app.use(express.json());
app.use(cors())

app.get("/:shortUrl", async (req, res)=> {
    try { 
        const {shortUrl} = req.params;
        const link = await Link.findOne({shortUrl})
        const {longUrl} = link
        if (!link) return res.status(404).json({
           success: false,
           message: "URL not found"
           })
         const redirectUrl = `${req.protocol}://${longUrl}`;

         return res.redirect(301, redirectUrl);
        
        
       } catch (err) {
           res.status(500).json({ success: false , data: err})
       }
})

app.use('/api/v1/links' , linkRouter )


app.listen(port, async () => {
    await connectToDatabase()
    console.log(`Server is Listening on port ${port}`)
})