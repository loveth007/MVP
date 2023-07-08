const mongoose = require ('mongoose')

const db = async () => {
    try {
    console.log ('connecting to mongoose database...')
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING ,
    { useNewUrlParser: true, 
    useUnifiedTopology: true ,
    dbName: process.env.DATABASE_NAME, 
    useFindAndModify: false } );
    console.log ('connected to database')
    } catch (error) {
    console.log(error)
    }
}
    

module.exports= db