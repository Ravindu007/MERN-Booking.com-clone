const mongoose = require("mongoose")

const Schema = mongoose.Schema

const propertiesSchema = new Schema({
  propertyName:{type:String, required:true},
  address:{type:String, required:true},
  unitNumber:{type:String, required:true},
  zipCode:{type:String, required:true},
  town:{type:String, required:true},
  city:{type:String, required:true},
  country:{type:String, required:true},
  business:{type:String, required:true},
  ownerName:{type:String, required:true},
  ownerNickName:{type:String, required:true},
  managedBy:{type:String, required:true},
  governmentRepresentation:{type:String, required:true},
  propertyImage1:{type:String, required:true},
  propertyImage2:{type:String, required:true},
  propertyImage3:{type:String, required:true},
})

module.exports = mongoose.model("property",propertiesSchema)