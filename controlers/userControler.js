const fs = require('fs')

const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const users = data.users

// create the product
const createUser = (req,res)=>{
    console.log(req.body);
    users.push(req.body)
    res.status(201).json(req.body)
}
// show all the users
const getAllusers =(req,res)=>{
    res.json(users)
}
//show the users based on what id search
const getUser = (req,res)=>{
    const id = +req.params.id
    const product = users.find(p=>p.id===id)
    res.json(product)
}
const replaceUser = (req,res)=>{
    const id = +req.params.id
    const productIndex = users.findIndex(p=>p.id===id)
    users.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json()
}
const updateUser = (req,res)=>{
    const id = +req.params.id
    const productIndex = users.findIndex(p=>p.id===id)
    const product = users[productIndex]
    users.splice(productIndex,1,{...product,...req.body})
    res.status(201).json()
}
const deleteUser = (req,res)=>{
    const id = +req.params.id
    const productIndex = users.findIndex(p=>p.id===id)
    const product = users[productIndex]
    users.splice(productIndex,1)
    res.status(201).json(product)
}
exports.createUser = createUser
exports.getAllusers = getAllusers
exports.getUser = getUser
exports.replaceUser = replaceUser
exports.updateUser = updateUser
exports.deleteUser = deleteUser

