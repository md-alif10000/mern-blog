const express =require('express')
const env=require('dotenv')
const app = express();

env.config()

app.get('/',(req,res)=>{
    res.send('Hello ,,')
    
})


const PORT=process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`App is listening at Port:${PORT}`)
})