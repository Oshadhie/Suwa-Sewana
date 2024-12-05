import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//app config
const app = express()
const port = process.env.PORT || 4000

//middlewares
app.arguments(express.json())
app.arguments(cors())
