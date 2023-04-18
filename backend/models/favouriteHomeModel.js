const mongoose = require("mongoose")

const Schema = mongoose.Schema

const favouriteHomeSchema = new Schema({
  img:{type:String, required:true},
  propertyName:{type:String, required:true},
  address:{type:String, required:true},
  price:{type:String, required:true},
  rating:{type:String, required:true},
  numberOfReviews:{type:String, required:true}
}, {timestamps:true})

module.exports = mongoose.model('favouriteHome', favouriteHomeSchema)