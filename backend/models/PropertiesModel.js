const mongoose = require("mongoose")

const Schema = mongoose.Schema

const propertiesSchema = new Schema({
  img:{type:String, required:true},
  type:{type:String, required:true},
  number:{type:String, required:true},
})

module.exports = mongoose.model("property",propertiesSchema)