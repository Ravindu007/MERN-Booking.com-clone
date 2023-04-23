const mongoose = require("mongoose")

const Schema = mongoose.Schema

const destinationSchema = new Schema({
  placeName:{type:String, required:true},
  properties:{type:String, required:true},
},{timestamps:true})

module.exports = mongoose.model('destination',destinationSchema)