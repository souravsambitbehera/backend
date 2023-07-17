const express= require('express')
const morgan = require('morgan')
const server = express()
const userRouter = require('./routes/userRoutes')
const port = 8080
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecomerce');
  console.log("database connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// bodyparser

server.use(express.json());
server.use(morgan('dev'))
server.use(express.static('public'))
// server.use('/products',productRouter.router)
server.use('/users',userRouter.router)



server.listen(port ,()=>{
    console.log(`Serrver Listening at http://localhost:${port}`)
})