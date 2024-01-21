const mongoose = require("mongoose")
const {Schema} = mongoose;



mongoose.connect("mongodb+srv://admin1:admin1@cluster0.y7slsht.mongodb.net/todos")

const TodoSchema = mongoose.Schema ({
    title : String,
    description : String,
    completed : Boolean
})
const todo = mongoose.model("todos",TodoSchema)

module.exports = {
    todo
}