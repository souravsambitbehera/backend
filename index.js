const express= require('express')
const morgan = require('morgan')
const server = express()
// const productRouter = require('./routes/productRoutes')
// const userRouter = require('./routes/userRoutes')
const port = 8080
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todolist');
  console.log("database connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

server.use(express.json());
server.use(morgan('dev'))
server.use(express.static('public'))
// server.use('/products',productRouter.router)
// server.use('/users',userRouter.router)
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title:{type:String,required:true},
  status: {type:Boolean,required:true},
  date :{type:Date, default:Date.now},
})

const Task = mongoose.model('Task', taskSchema)
server.post('/task', async function (req, res) {
  try {
    let task = new Task(req.body);

    await task.save();
    res.json(task);
  } catch (error) {
    console.error('Error saving task:', error);
    res.status(500).json({ error: 'Failed to save task' });
  }
});


server.get("/tasks",async function(req,res){
  const tasks = await Task.find({})
  res.json(tasks)
})
server.get("/tasks/:title",async (req,res)=>{
const title = req.params.title
const task = await Task.findOne({title})
res.json(task)
})
server.put("/tasks/:title",async (req,res)=>{
  const title = req.params.title
  const task = await Task.findOneAndReplace({title:title},req.body,{new:true})
  res.json(task)
})
server.delete("/tasks/:title",async (req,res)=>{
const title = req.params.title
const task = await Task.findOneAndDelete({title:title})
res.json(task)
})


server.listen(port ,()=>{
    console.log(`Serrver Listening at http://localhost:${port}`)
})