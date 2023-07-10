const express= require('express')
const morgan = require('morgan')
const server = express()
const productRouter = require('./routes/productRoutes')
const userRouter = require('./routes/userRoutes')
const port = 8080
// bodyparser

server.use(express.json());
server.use(morgan('dev'))
server.use(express.static('public'))
server.use('/products',productRouter.router)
server.use('/users',userRouter.router)



server.listen(port ,()=>{
    console.log(`Serrver Listening at http://localhost:${port}`)
})