const express =require('express')
const env=require('dotenv')
const connect=require('./config/db')
const app = express();

env.config()
// Connect mongodb database
connect()

app.get('/',(req,res)=>{
    res.send('Hello ,Server is running......')
    
})


const PORT=process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`App is listening at Port:${PORT}`)
})