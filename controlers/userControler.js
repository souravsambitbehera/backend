const model = require("../models/users.models")
const User = model.User

// create the product
const createUser = async(req,res)=>{
    try {
        const user = new User(req.body)
        await user.save()
        res.json(user)
        
    } catch (error) {
        console.log(error)
        res.status(error)
    }
    
}
// show all the users
const getAllusers = async (req,res)=>{
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(error)
    }
}
//show the users based on what id search
// const getUser = async (req,res)=>{
    
// }
// const replaceUser = (req,res)=>{
//     const id = +req.params.id
//     const productIndex = users.findIndex(p=>p.id===id)
//     users.splice(productIndex,1,{...req.body,id:id})
//     res.status(201).json()
// }
// const updateUser = (req,res)=>{
//     const id = +req.params.id
//     const productIndex = users.findIndex(p=>p.id===id)
//     const product = users[productIndex]
//     users.splice(productIndex,1,{...product,...req.body})
//     res.status(201).json()
// }
// const deleteUser = (req,res)=>{
//     const id = +req.params.id
//     const productIndex = users.findIndex(p=>p.id===id)
//     const product = users[productIndex]
//     users.splice(productIndex,1)
//     res.status(201).json(product)
// }
exports.createUser = createUser
exports.getAllusers = getAllusers

// exports.getUser = getUser
// exports.replaceUser = replaceUser
// exports.updateUser = updateUser
// exports.deleteUser = deleteUser

