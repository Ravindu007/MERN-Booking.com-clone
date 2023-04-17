const explorePlacesModel = require("../models/ExploreDataModel")

const fetchAllExploreData = async(req,res)=>{

  try{
    const allExplorePlaces = await explorePlacesModel.find({})
    res.status(200).json(allExplorePlaces)
  }catch(error){
    res.status(400).json({error:error.message})
  }
}

module.exports = {fetchAllExploreData}