const explorePlacesModel = require("../models/ExploreDataModel")
const propertyModel = require("../models/PropertiesModel")

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

module.exports = {fetchAllExploreData, fetchAllProperties}