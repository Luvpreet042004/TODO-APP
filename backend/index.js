const express = require("express");
const {createTodo ,updateTodo} = require("./types");
const cors = require("cors")
const { todo } = require("./db")

const app = express();

app.use(express.json())
app.use(cors());

app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "you sent wrong input"
        })
        return;
    } 
    // put in mongoDB
    todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        mag: "TOdo created"
    })
})

app.get("/todo",async(req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/todo",async(req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg : "you sent wrong input"
        })
        return;
    } 

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    }) 
    res.json({
        msg : "todo marked as completedm"
    })
})

app.listen(3000,(req,res)=>{
    console.log("Server started At 3000");
})