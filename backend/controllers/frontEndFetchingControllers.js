const explorePlacesModel = require("../models/ExploreDataModel")
const propertyModel = require("../models/PropertiesModel")
const tripPlacesModel = require("../models/TripPlacesModel")
const insprationModel = require("../models/InspirationModel")


const fetchAllExploreData = async(req,res)=>{

  try{
    const allExplorePlaces = await explorePlacesModel.find({})
    res.status(200).json(allExplorePlaces)
  }catch(error){
    res.status(400).json({error:error.message})
  }
}


const fetchAllProperties = async(req,res) => {
  try {
    const allProperties = await propertyModel.find({})
    res.status(200).json(allProperties)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}


const fetchAllTripPLaces = async(req,res) => {
  try {
    const allTripPlaces = await tripPlacesModel.find({}) 
    res.status(200).json(allTripPlaces)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}


const fetchAllInspirations = async(req,res) => {
  try {
    const allInspirations = await insprationModel.find({})
    res.status(200).json(allInspirations)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}


module.exports = {fetchAllExploreData, fetchAllProperties, fetchAllTripPLaces, fetchAllInspirations}