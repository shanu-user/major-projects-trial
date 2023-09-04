import express from 'express'
import connectDB from './connectMongoDb.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
connectDB()
const app = express()
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.get('/', (req,res) =>{

})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})