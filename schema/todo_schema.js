//imorting mongoose library into our file
import mongoose from "mongoose"

//an instance of a Schema and model
const {Schema, model} = mongoose

//creating a variblefor our schema
const todoschema= Schema({
title :{
    type:String,
    required:true
},
description:{
    type: String,
    required: true
},
date_time:{
    type: String,
    required:true
}, 
status:{
    type: Boolean,
    required: false,
    default:false
}
})

const todoModel =model('todo', todoschema)

export default todoModel
