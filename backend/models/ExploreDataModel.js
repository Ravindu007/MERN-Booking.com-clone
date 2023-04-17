const mongoose = require("mongoose")

const Schema = mongoose.Schema

const exploreDataSchema = new Schema({
  place:{type:String, required:true},
  numberOfProperties:{type:String, required:true}
},{timestamps:true})

module.exports = mongoose.model('explore-place',exploreDataSchema)