const TodoModel = require('../model/todo.model')

// Create
const create = async (req,res,next ) =>{
    const {text,hasComplete} = req.body
    // console.log("Testing " +text)
    await TodoModel.create({text,hasComplete},
        (err,result)=>{
            if(err){
                next(err)
            }
            
            else{
                res.json({
                    message: "Sucessfully created todo",
                    data: result
                })

            }

    })
}

// Read

const read  = async (req,res,next) =>{
    await TodoModel.find({},
        (err,result)=>{
            if(err){
                next(err)
            }
            else{
                res.json({
                    message: "Sucessfully Read Todo",
                    data: result
                })
            }

    })
}

// Update
const update = async (req,res,next) =>{
    await TodoModel.findByIdAndUpdate(req.params.id,req.body,
        (err,result)=>{
            if(err){
                next(err)
            }
            else{
                res.json({
                    message:"Sucessfully Updated Todo",
                    data: result
                })
            }

    })
}

// Delete
const deleteTodo = async(req,res,next) =>{
    await TodoModel.remove({_id:req.params.id},
        (err,result)=>{
            if(err){
                next(err)
            }
            else{
                res.json({
                    message:"Sucessfully Deleted Todo",
                    data:result
                })
            }

    })
}

module.exports = {create,read,update,deleteTodo}