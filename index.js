const express= require('express')

const server = express()
const port = 8080
server.get('/demo/:id', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})
server.listen(port ,()=>{
    console.log(`Serrver Listening at http://localhost:${port}`)
})