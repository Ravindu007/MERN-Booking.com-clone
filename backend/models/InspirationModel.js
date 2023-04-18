const mongoose = require("mongoose")

const Schema = mongoose.Schema

const inspirationSchema = new Schema({
  img:{type:String, required:true},
  title:{type:String, required:true},
  content:{type:String, required:true}
}, {timestamps:true})

module.exports = mongoose.model('inspiration', inspirationSchema)