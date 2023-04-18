const mongoose = require("mongoose")

const Schema = mongoose.Schema

const tripPlaceSchema = new Schema({
  img:{type:String, required:true},
  placeName:{type:String, required:true},
  numberOfProperties:{type:String, required:true}
},{timestamps:true})

module.exports = mongoose.model('trip-place', tripPlaceSchema)