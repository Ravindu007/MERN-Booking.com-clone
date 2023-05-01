const propertyModel = require("../models/PropertiesModel")


const createProperty = async(req,res) => {
  try {
    const {} = req.body
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

module.exports = {createProperty}